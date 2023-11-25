import React from 'react'
import {  Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">RKshop</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item dropdown" >
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/Electronics">Electonics</Link></li>
            <li><Link class="dropdown-item" to="/Clothing">Clothings</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="/Footware">Footware</Link></li>
            <li><Link class="dropdown-item" to="/Furniture">Furniture</Link></li>

          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Contact">Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Login">Log-in</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  )
}

