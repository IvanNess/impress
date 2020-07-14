import React, { useEffect, useCallback, useState } from 'react'
import { Table } from 'antd'
import { Spin, Alert } from 'antd';
import useFetch from '../calc-app/hooks/useFetch'

import './stat.scss'
//import 'antd/dist/antd.css'

const Stat = () => {
    const [{ error, data, isLoading }, doFetch] = useFetch(`${process.env.REACT_APP_SERVER_URI}/users`)
    const doFetchCb = useCallback(doFetch, [])

    const [indexedData, setIndexedData] = useState([])

    useEffect(() => {
        doFetchCb()
    }, [doFetchCb])

    useEffect(() => {
        if (data) {
            setIndexedData(() => {
                return data.map((item, idx) => {
                    return { ...item, key: idx }
                })
            })
        }
    }, [data])

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        //{ title: 'Token', dataIndex: 'token', key: 'token' },
        { title: 'Fingerprint', dataIndex: 'fingerPrint', key: 'fingerPrint' },
        { title: 'Количество посещений', dataIndex: 'visitQuantity', key: 'visitQuantity' },
        { title: 'Первое посещение', dataIndex: 'firstVisit', key: 'firstVisit' },
        { title: 'Последнее посещение', dataIndex: 'lastVisit', key: 'lasttVisit' }
    ]

    const expandedRowRender = (record) => {

        const columns = [
            { title: 'Тип видео', dataIndex: 'wannaType', key: 'wannaType' },
            { title: 'Хронометраж', dataIndex: 'chrono', key: 'chrono' },
            { title: 'Тип ролика', dataIndex: 'auxType', key: 'auxType' },
            { title: 'Язык', dataIndex: 'language', key: 'language' },
            { title: 'Бюджет', dataIndex: 'budget', key: 'budget' },
            { title: 'Сервисы', dataIndex: 'services', key: 'services' },
            { title: 'от', dataIndex: 'min', key: 'min' },
            { title: 'до', dataIndex: 'max', key: 'max' },
            { title: 'Контакт', dataIndex: 'contact', key: 'contact' },
            { title: 'Дата запроса', dataIndex: 'date', key: 'date' },
            { title: 'Fingerprint', dataIndex: 'fingerPrint', key: 'fingerPrint' },
        ]

        let expandedData = record.calcs.map((calc, idx) => {

            const services = calc.services.reduce((res, service, idx, arr) => {
                const string = service.auxPanel.length === 0 ? service.name : `${service.name} ${service.auxPanel[0].value} ${service.auxPanel[0].chosen}`
                return res + `${string}${arr.length === idx + 1 ? '' : ', '}`
            }, '')
            //const services = 'services'

            const { chrono, contact } = calc

            return ({
                key: idx,
                wannaType: calc.wannaType,
                chrono: `${chrono.min ? `${chrono.min} мин ` : ``}${chrono.sec ? `${chrono.sec} сек` : ``}`,
                auxType: calc.auxType,
                language: calc.languageTypes ? calc.languageTypes[0] : '',
                budget: calc.budgetTypes ? calc.budgetTypes.reduce((res, budget, idx, arr) => res + `${budget}${idx + 1 === arr.length ? '' : ', '}`, '') : '',
                services,
                contact: contact && `${contact.email ? `${contact.email} ` : ``}${contact.messengers ? `${contact.messengers}, ` : ``}`,
                date: calc.date ? calc.date : '',
                fingerPrint: calc.fingerPrint,
                min: calc.min,
                max: calc.max
            })
        })



        return (
            <Table columns={columns} dataSource={expandedData} pagination={false} />
        )
    }


    return (
        <div className={`stat`}>
            {isLoading && <div className={`spinner-wrapper`} size='large'>
                <Spin tip="Loading..."/>
            </div>}
            {data && (
                <div className={`table-div`}>
                    <div className={`title`}>
                        <h2>Stat Page</h2>
                    </div>
                    <Table
                        className="table"
                        columns={columns}
                        expandable={{ expandedRowRender }}
                        dataSource={indexedData}
                    />
                </div>
            )}
            {error && <div className={`error-wrapper`}>
                <div className={`error`}>
                    <p>{`${error}`}</p>
                    <a href={`${process.env.REACT_APP_SERVER_URI}/auth/google`}>Sign In with Google</a>
                </div>
            </div>}
        </div>
    )
}

export default Stat