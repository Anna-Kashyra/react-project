import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";
import styles from './Pagination.module.css';

type PaginationProps = {
    isFirstPage: boolean;
    isLastPage: boolean
}

const Pagination: FC<PaginationProps> = ({isFirstPage, isLastPage}) => {

    const [query, setQuery] = useSearchParams({page: '1'});

    const onClickPrevHandler = () => {
        const page = query.get('page');
        if (page && +page > 1) {
            let currentPage = +page;
            currentPage--;
            setQuery({page: currentPage.toString()});
        }
    }

    const onClickNextHandler = () => {
        const page = query.get('page');
        if (page) {
            let currentPage = +page;
            currentPage++;
            setQuery({page: currentPage.toString()});
        }
    }

    return (
        <div className={styles.pagination_container}>
            <button onClick={onClickPrevHandler} disabled={isFirstPage}>Previous</button>
            <button onClick={onClickNextHandler} disabled={isLastPage}>Next</button>
        </div>
    );
};

export default Pagination;