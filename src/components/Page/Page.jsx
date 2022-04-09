import React, { Fragment } from 'react';
import styles from './Page.module.css';
import Header from '../Header';
import Form from '../Form';
import Loader from '../Loader';
import Forecast from '../Forecast';
import Error from '../Error';
import useForecast from '../../hooks/useForecast';

const Page = () => {
    const { isLoading, isError, forecast, submitRequest } = useForecast();
    const onSubmit = value => {
        console.log({value});
        submitRequest(value);
    };
    return (
        <Fragment>
            <Header />
           {!forecast && (<div className={`${styles.box} position-relative`}>
                {!isLoading && <Form submitSearch={onSubmit} />}
                {isError && <Error message={isError} />}
                {isLoading && <Loader />}
            </div>)}
            {forecast && <Forecast forecast={forecast} />}
        </Fragment>
    );
};

export default Page;
