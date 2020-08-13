import React, {useState} from 'react'
import style from './paginator.module.css'

const Paginator = ({ totalUsers, onOnePage, onPageClick, currentPage, paginatorLength }, { ...props }) => {
    let pagesCount = Math.ceil(totalUsers / onOnePage);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / paginatorLength);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftBorder = (portionNumber - 1) * paginatorLength + 1;
    let rightBorder = portionNumber * paginatorLength;

    let pagesList = pages
              .filter(page => page >= leftBorder && page <= rightBorder)
              .map(
                  (page) => {
            return (
                <span className={currentPage === page && style.active}
                    onClick={() => {
                        onPageClick(page)
                    }}>{page}</span>
            )
        }
    )

    return (
        <div className={style.paginator}>
            <button onClick={() => setPortionNumber(portionNumber - 1)}
                    disabled={portionNumber == 1}>Prev</button>
            {pagesList}
            <button onClick={() => setPortionNumber(portionNumber + 1)}
                    disabled={portionCount <= portionNumber}>Next</button>
        </div>
    )
}

export default Paginator;