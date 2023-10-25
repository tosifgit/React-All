import React from 'react'

export default function Header() {
  return (
    <div>
        {/* Page Header Start */}
<div className="container-fluid page-header py-5" style={{marginBottom: '6rem'}}>
  <div className="container py-5">
    <h1 className="display-3 text-white mb-3 animated slideInDown">Not Found</h1>
    <nav aria-label="breadcrumb animated slideInDown">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
        <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
        <li className="breadcrumb-item text-white active" aria-current="page">404</li>
      </ol>
    </nav>
  </div>
</div>
{/* Page Header End */}

    </div>
  )
}
