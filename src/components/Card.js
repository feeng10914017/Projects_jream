import React from 'react'

function Card() {
  return (
    <>
      <div className="row">
        <div
          className="col-sm-6"
          style={{
            marginTop: '48px',
          }}
        >
          <div
            className="card"
            style={{
              marginRight: '24px',
            }}
          >
            <div
              className="card-body"
              style={{
                padding: '48px',
              }}
            >
              <h5 className="card-title">個人資料</h5>
              <p className="card-text">查看你的個人資料，或是修改資料。</p>
              <button type="button" className="btn btn-primary">
                管理您的資料
              </button>
            </div>
          </div>
        </div>
        <div
          className="col-sm-6"
          style={{
            marginTop: '48px',
          }}
        >
          <div
            className="card"
            style={{
              marginRight: '24px',
            }}
          >
            <div
              className="card-body"
              style={{
                padding: '48px',
              }}
            >
              <h5 className="card-title">車輛最愛</h5>
              <p className="card-text">
                將喜愛的車輛加到最愛，以獲得車輛相關消息。
              </p>
              <button type="button" className="btn btn-primary">
                採取行動
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-sm-6"
          style={{
            marginTop: '48px',
          }}
        >
          <div
            className="card"
            style={{
              marginRight: '24px',
            }}
          >
            <div
              className="card-body"
              style={{
                padding: '48px',
              }}
            >
              <h5 className="card-title">租車紀錄</h5>
              <p className="card-text">
                查看自己租車的紀錄，也可確認最新的租車狀況。
              </p>
              <button type="button" className="btn btn-primary">
                查看紀錄
              </button>
            </div>
          </div>
        </div>
        <div
          className="col-sm-6"
          style={{
            marginTop: '48px',
          }}
        >
          <div
            className="card"
            style={{
              marginRight: '24px',
            }}
          >
            <div
              className="card-body"
              style={{
                padding: '48px',
              }}
            >
              <h5 className="card-title">訂單紀錄</h5>
              <p className="card-text">查看自己近期購買商品的紀錄。</p>
              <button type="button" className="btn btn-primary">
                查看紀錄
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Card
