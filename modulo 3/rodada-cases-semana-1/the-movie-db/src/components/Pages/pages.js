import React from "react";
import './pages.css';
import { useContext } from "react";
import { ContextMovies } from "../../services/context";

export const Pages = () => {
    const globalMovies = useContext(ContextMovies);

    const handlePageButtons = (totalPages) => {
        if(totalPages === 3){
            return (
                <div className='pages'>
                    <a onClick={() => globalMovies.setPage(1)}>1</a>
                    <a onClick={() => globalMovies.setPage(2)}>2</a>
                    <a onClick={() => globalMovies.setPage(3)}>3</a>
                </div>
            )
        }else if(totalPages === 2){
            return (
                <div className='pages'>
                    <a onClick={() => globalMovies.setPage(1)}>1</a>
                    <a onClick={() => globalMovies.setPage(2)}>2</a>
                </div>
            )
        }else if(totalPages === 1){
            return (
                <div className='pages'>
                    <a onClick={() => globalMovies.setPage(1)}>1</a>
                </div>
            )
        }
    }

    return(
        <div>
            {(globalMovies.totalPages <= 3) && handlePageButtons(globalMovies.totalPages)}
            {(globalMovies.totalPages > 3 && globalMovies.page > 0 && globalMovies.page < 3) &&  (
                <div className='pages'>
                    <a onClick={() => globalMovies.setPage(1)}>1</a>
                    <a onClick={() => globalMovies.setPage(2)}>2</a>
                    <a onClick={() => globalMovies.setPage(3)}>3</a>
                    <a onClick={() => globalMovies.setPage((page) => page + 1)}>{'>'}</a>
                    <a onClick={() => globalMovies.setPage(globalMovies.totalPages)}>Ultima</a>
                </div>
            )}
            {(globalMovies.page >= 3 && globalMovies.page < (globalMovies.totalPages - 2) ) &&  (
                <div className='pages'>
                    <a onClick={() => globalMovies.setPage(1)}>Primeira</a>
                    <a onClick={() => globalMovies.setPage((page) => page - 1)}>{'<'}</a>
                    <a onClick={() => globalMovies.setPage((page) => page - 1)}>{globalMovies.page - 1}</a>
                    <a className="current-page">{globalMovies.page}</a>
                    <a onClick={() => globalMovies.setPage((page) => page + 1)}>{globalMovies.page + 1}</a>
                    <a onClick={() => globalMovies.setPage((page) => page + 1)}>{'>'}</a>
                    <a onClick={() => globalMovies.setPage(globalMovies.totalPages)}>Ultima</a>
                </div>
            )}
            {(globalMovies.totalPages > 3 && globalMovies.page > (globalMovies.totalPages - 3) && globalMovies.page < globalMovies.totalPages)  &&  (
                <div className='pages'>
                    <a onClick={() => globalMovies.setPage(1)}>Primeira</a>
                    <a onClick={() => globalMovies.setPage((page) => page - 1)}>{'<'}</a>
                    <a onClick={() => globalMovies.setPage((page) => page - 1)}>{globalMovies.page - 1}</a>
                    <a className="current-page">{globalMovies.page}</a>
                    <a onClick={() => globalMovies.setPage((page) => page + 1)}>{globalMovies.page + 1}</a>
                    <a onClick={() => globalMovies.setPage((page) => page + 1)}>{'>'}</a>
                    <a onClick={() => globalMovies.setPage(globalMovies.totalPages)}>Ultima</a>
                </div>
            )}
            {(globalMovies.totalPages > 3 && globalMovies.page === globalMovies.totalPages)  &&  (
                <div className='pages'>
                    <a onClick={() => globalMovies.setPage(1)}>Primeira</a>
                    <a onClick={() => globalMovies.setPage((page) => page - 1)}>{'<'}</a>
                    <a onClick={() => globalMovies.setPage((page) => page - 2)}>{globalMovies.page - 2}</a>
                    <a onClick={() => globalMovies.setPage((page) => page - 1)}>{globalMovies.page - 1}</a>
                    <a className="current-page">{globalMovies.page}</a>
                </div>
            )}
        </div>
       
    )
}