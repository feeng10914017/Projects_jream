import React from 'react'
import { Link } from 'react-router-dom'
import '../member.scss'

function Card() {
  return (
    <>
      <div className="row">
        <div className="col-sm-6 A-card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title A-cardh5">
                <svg
                  // xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-person-fill"
                  viewBox="0 0 16 16"
                  style={{ marginBottom: '8px', marginRight: '16px' }}
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                個人資料
              </h5>
              <p className="card-text">查看你的個人資料，或是修改資料。</p>
              <Link to="/information">
                <button type="button" className="btn btn-primary">
                  管理您的資料
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6 A-card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title A-cardh5">車輛最愛</h5>
              <p className="card-text">
                將喜愛的車輛加到最愛，以獲得車輛相關消息。
              </p>
              <Link to="/favorite">
                <button type="button" className="btn btn-primary">
                  採取行動
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 A-card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title A-cardh5">租車紀錄</h5>
              <p className="card-text">
                查看自己租車的紀錄，也可確認最新的租車狀況。
              </p>
              <Link to="/rent-record">
                <button type="button" className="btn btn-primary">
                  查看紀錄
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6 A-card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title A-cardh5">訂單紀錄</h5>
              <p className="card-text">查看自己近期購買商品的紀錄。</p>
              <Link to="/order-record">
                <button type="button" className="btn btn-primary">
                  查看紀錄
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Card
