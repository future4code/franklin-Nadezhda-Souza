import React from "react";
import './pages.css';
import { useContext } from "react";
import { ContextMovies } from "../../services/context";

export const Pages = () => {
    const globalMovies = useContext(ContextMovies);

    return(
            <div>
                {(globalMovies.page > 0 && globalMovies.page < 4) &&  (
                <div className='pages'>
                    <p onClick={() => globalMovies.setPage(1)}>1</p>
                    <p onClick={() => globalMovies.setPage(2)}>2</p>
                    <p onClick={() => globalMovies.setPage(3)}>3</p>
                    <p onClick={() => globalMovies.setPage((page) => page + 1)}>{'>'}</p>
                    <p onClick={() => globalMovies.setPage(globalMovies.totalPages)}>Ultima</p>
                </div>
            )}
            {(globalMovies.page > 3 && globalMovies.page < (globalMovies.totalPages - 2) ) &&  (
                <div className='pages'>
                    <p onClick={() => globalMovies.setPage(1)}>Primeira</p>
                    <p onClick={() => globalMovies.setPage((page) => page - 1)}>{'<'}</p>
                    <p onClick={() => globalMovies.setPage((page) => page - 1)}>{globalMovies.page - 1}</p>
                    <p>{globalMovies.page}</p>
                    <p onClick={() => globalMovies.setPage((page) => page + 1)}>{globalMovies.page + 1}</p>
                    <p onClick={() => globalMovies.setPage((page) => page + 1)}>{'>'}</p>
                    <p onClick={() => globalMovies.setPage(globalMovies.totalPages)}>Ultima</p>
                </div>
            )}
            {(globalMovies.page > (globalMovies.totalPages - 3) && globalMovies.page <= globalMovies.totalPages)  &&  (
                <div className='pages'>
                    <p onClick={() => globalMovies.setPage(1)}>Primeira</p>
                    <p onClick={() => globalMovies.setPage((page) => page - 1)}>{'<'}</p>
                    <p onClick={() => globalMovies.setPage((page) => page - 1)}>{globalMovies.page - 1}</p>
                    <p>{globalMovies.page}</p>
                    <p onClick={() => globalMovies.setPage((page) => page + 1)}>{globalMovies.page + 1}</p>
                </div>
            )}
        </div>
       
    )
}