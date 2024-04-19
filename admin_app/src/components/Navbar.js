import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light" >
  <div class="container-fluid">
    <a class="navbar-brand text-white pl-3" href="#"><h2 style={{color: "#cfc1cf"}}>ATMOS</h2></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}
      {/* <ul class="navbar-nav ms-auto mb-2 mb-lg-0"> */}
      {/* <li class="nav-item rounded border">
          <a class="nav-link text-dark p-2" aria-current="page" href="#">
            <i className='bi bi-search'></i>
            Search</a>
        </li> */}
      {/* <li class="nav-item mx-1 border">
          <a class="nav-link text-dark p-2" aria-current="page" href="#">Account</a>
        </li> */}
        {/* <li > */}
          {/* <a class="nav-link text-dark p-2" aria-current="page" href="#">Logout</a> */}
          {/* <button class="btn m-1" style={{backgroundColor: "#cfc1cf"}} type="submit">User-Name</button> */}
          {/* <button class="btn" style={{backgroundColor: "#cfc1cf"}} type="submit">Logout</button> */}
        {/* </li> */}

        {/* <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
       
      {/* </ul> */}
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      */}
    {/* </div> */}
  </div>
</nav>
  )
}

export default Navbar
