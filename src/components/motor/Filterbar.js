import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../css/motor.scss'
import { AiOutlineSearch } from 'react-icons/ai' //search_icon

function Filterbar(props) {
  const [search_query, setSearch_query] = useState('')
  async function Search() {
    const request = new Request(
      'http://localhost:6001/product/?search=' + search_query,
      {
        method: 'GET',
        credentials: 'include',
      }
    )
    const response = await fetch(request)
    const data = await response.json()

    props.setMyproduct(data.rows)
    props.setTotalpage(data.totalPages)
  }
  useEffect(() => {
    Search()
  }, [search_query])
  const handleSearch = (value) => {
    setSearch_query(value)
  }
  return (
    <>
      <div className="row d-flex justify-content-center my-2">
        <div className="col col-sm-6 col-lg-2 s-filterbar">
          <button
            className="btn btn-outline-secondary dropdown-toggle s-filterbar-btn"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            價格區間
          </button>
          <div className="dropdown-menu">
            <Link
              className="dropdown-item"
              to="#"
              onClick={() => {
                props.setPrice('<1000')
              }}
            >
              Under NT$1000
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              onClick={() => {
                props.setPrice('<2000')
              }}
            >
              Under NT$2000
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              onClick={() => {
                props.setPrice('<3000')
              }}
            >
              Under NT$3000
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              onClick={() => {
                props.setPrice('<4000')
              }}
            >
              Under NT$4000
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              onClick={() => {
                props.setPrice('<5000')
              }}
            >
              Under NT$5000
            </Link>
          </div>
        </div>

        <div className="col col-sm-6 col-lg-2 s-filterbar">
          <button
            className="btn btn-outline-secondary dropdown-toggle s-filterbar-btn"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            排氣量
          </button>
          <div className="dropdown-menu">
            <Link
              className="dropdown-item"
              to="#"
              onClick={() => props.setVendor('V001')}
            >
              150 CC
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              onClick={() => props.setVendor('V002')}
            >
              300 CC
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              onClick={() => props.setVendor('V003')}
            >
              450 CC
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              onClick={() => props.setVendor('V004')}
            >
              600 CC
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              onClick={() => props.setVendor('V005')}
            >
              750 CC
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              onClick={() => props.setVendor('V006')}
            >
              900 CC
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              onClick={() => props.setVendor('V007')}
            >
              1050 CC
            </Link>
          </div>
        </div>

        <div className="col col-sm-6 col-lg-2 s-filterbar">
          {/* <button
            className="btn btn-outline-secondary dropdown-toggle s-filterbar-btn"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            排序方式
          </button>
          <div className="dropdown-menu">
            <Link
              className="dropdown-item"
              to="#"
              onClick={() => props.setOrderBy('itemName ASC')}
            >
              遊戲名稱
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              onClick={() => props.setOrderBy('itemPrice DESC')}
            >
              價錢高至低
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              onClick={() => props.setOrderBy('itemPrice ASC')}
            >
              價錢低至高
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              onClick={() => props.setOrderBy('itemDate ASC')}
            >
              推出時間最早
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              onClick={() => props.setOrderBy('itemDate DESC')}
            >
              推出時間最新
            </Link>
          </div> */}
        </div>

        <div className="col col-sm-6 col-lg-2 s-filterbar">
          <input
            type="search"
            className="form-control s-filterbar-search pl-4"
            aria-label="Text input with dropdown button"
            name="search"
            value={search_query}
            onChange={(event) => setSearch_query(event.target.value)}
          />
          <Link
            className="s-searchicon"
            to={'/productlist/?search=' + `${search_query}`}
            // onClick={() => props.handleSearch()}
          >
            {/* <i class="fas fa-search"></i> */}
            <AiOutlineSearch style={{ fontSize: '24px', marginTop: '10px' }} />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Filterbar
