import React from 'react'
import style from './paginator.module.css'

const Paginator = ({ totalUsers, onOnePage, onPageClick, currentPage }, { ...props }) => {

    let pagesCount = Math.ceil(totalUsers / onOnePage);
    let pages = [];

    for (let i = 1; i <= pagesCount && i <= 15; i++) {
        pages.push(i);
    }

    let pagesList = pages.map(
        page => {
            return (
                <span className={currentPage === page && style.active}
                    onClick={() => {
                        onPageClick(page)
                    }}>{page}</span>
            )
        }
    )

    return (
        <div className={style.paginator}>{pagesList}</div>
    )
}

export default Paginator;