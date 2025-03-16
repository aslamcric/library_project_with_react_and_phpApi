import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className="leftside-menu">
                {/* Brand Logo Light */}
                <a href="http://localhost:5173/" className="logo logo-light">
                    <span className="logo-lg">
                        <img src="assets/images/logo.png" alt="logo" />
                    </span>
                    <span className="logo-sm">
                        <img src="assets/images/logo-sm.png" alt="small logo" />
                    </span>
                </a>
                {/* Brand Logo Dark */}
                <a href="index.html" className="logo logo-dark">
                
                    <span className="logo-lg">
                        <img src="assets/images/logo-dark.png" alt="dark logo" />
                    </span>
                    <span className="logo-sm">
                        <img src="assets/images/logo-sm.png" alt="small logo" />
                    </span>
                </a>
                {/* Sidebar -left */}
                <div className="h-100" id="leftside-menu-container" data-simplebar>
                    {/*- Sidemenu */}



                    <ul className="side-nav">
                        {/* <li class="side-nav-title">Main</li> */}
                        <li className="side-nav-item">
                            <a href="http://localhost:5173/" className="side-nav-link">
                                <i className="ri-dashboard-3-line" />
                                <span className="badge bg-success float-end">9+</span>
                                <span> Dashboard </span>
                            </a>
                        </li>
                        <li className="side-nav-title">Management</li>
                        {/* Book Management Menu */}
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarBaseUI" aria-expanded="false" aria-controls="sidebarBaseUI" className="side-nav-link">
                                {/* <i class="ri-briefcase-line"></i> */}
                                <i className="fa-solid fa-book" />
                                <span> Book Management </span>
                                <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="sidebarBaseUI">
                                <ul className="side-nav-second-level">
                                    <li>
                                        {/* <a href="<?php echo $base_url ?>/book">View All Books</a> */}
                                        <NavLink to="/book">View All Books</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* Reader Management Menu */}
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarExtendedUI" aria-expanded="false" aria-controls="sidebarExtendedUI" className="side-nav-link">
                                <i className="fas fa-users" />
                                <span> Reader Management </span>
                                <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="sidebarExtendedUI">
                                <ul className="side-nav-second-level">
                                    <li>
                                        {/* <a href="<?php echo $base_url ?>/reader">View All Readers</a> */}
                                        <NavLink to="/reader">View All Readers</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* Book borrows Menu */}
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#borrows" aria-expanded="false" aria-controls="borrows" className="side-nav-link">
                                <i className="fas fa-hand-holding" />
                                <span>Borrow Book</span>
                                <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="borrows">
                                <ul className="side-nav-second-level">
                                    <li>
                                        {/* <a href="<?php echo $base_url ?>/borrow">View All Borrow Books</a> */}
                                        <NavLink to="/allborrow">View All Borrow Books</NavLink>
                                        {/* <NavLink to="/borrow">View All Borrow Books</NavLink> */}
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* Book Return Menu */}
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#return" aria-expanded="false" aria-controls="return" className="side-nav-link">
                                <i className="fas fa-hand-holding" />
                                <span>Book Return</span>
                                <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="return">
                                <ul className="side-nav-second-level">
                                    <li>
                                        {/* <a href="<?php echo $base_url ?>/BookReturn">Return</a> */}
                                        <NavLink to="/return">BookReturn</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* Book borrowdetails Menu */}
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#borrowdetails" aria-expanded="false" aria-controls="borrowdetails" className="side-nav-link">
                                <i className="fas fa-file-alt" />
                                <span>Borrow Book Details </span>
                                <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="borrowdetails">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <a href="<?php echo $base_url ?>/borrowdetail">View All Borrow Details</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* Book Copies Menu */}
                        {/* <li class="side-nav-item">
                      <a data-bs-toggle="collapse" href="#sidebarBookCopies" aria-expanded="false" aria-controls="sidebarBookCopies" class="side-nav-link">
                          <i class="fa-solid fa-book-open"></i>
                          <span> Book Copies </span>
                          <span class="menu-arrow"></span>
                      </a>
                      <div class="collapse" id="sidebarBookCopies">
                          <ul class="side-nav-second-level">
                              <li>
                                  <a href="<?php echo $base_url ?>/bookcopy">View All Book Copies</a>
                              </li>
                          </ul>
                      </div>
                  </li> */}
                        {/* Transactions Menu */}
                        {/* <li class="side-nav-item">
                      <a data-bs-toggle="collapse" href="#sidebarIcons" aria-expanded="false" aria-controls="sidebarIcons" class="side-nav-link">
                          <i class="fas fa-exchange-alt"></i>
                          <span> Transactions </span>
                          <span class="menu-arrow"></span>
                      </a>
                      <div class="collapse" id="sidebarIcons">
                          <ul class="side-nav-second-level">
                              <li>
                                  <a href="<?php echo $base_url ?>/transaction">View All Transactions</a>
                              </li>
                          </ul>
                      </div>
                  </li> */}
                        {/* Fines Menu */}
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarCharts" aria-expanded="false" aria-controls="sidebarCharts" className="side-nav-link">
                                <i className="fas fa-coins" />
                                <span> Fines </span>
                                <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="sidebarCharts">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <a href="<?php echo $base_url ?>/fine">View All Fines</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* Categories Menu */}
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarCategory" aria-expanded="false" aria-controls="sidebarCategory" className="side-nav-link">
                                <i className="fas fa-layer-group" />
                                <span> Categories </span>
                                <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="sidebarCategory">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <a href="<?php echo $base_url ?>/category">View All Categories</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* Shelves Menu */}
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarShelve" aria-expanded="false" aria-controls="sidebarShelve" className="side-nav-link">
                                <i className="fas fa-archive" />
                                <span> Shelves </span>
                                <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="sidebarShelve">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <a href="<?php echo $base_url ?>/shelve">View All Shelves</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* Staff Menu */}
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarStaff" aria-expanded="false" aria-controls="sidebarStaff" className="side-nav-link">
                                <i className="fas fa-user" />
                                <span> Staff </span>
                                <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="sidebarStaff">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <a href="<?php echo $base_url ?>/staff">View All Staff</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* Exit Menu */}
                        <li className="side-nav-item mb-5">
                            <a data-bs-toggle="collapse" href="#sidebarPagesAuth" aria-expanded="false" aria-controls="sidebarPagesAuth" className="side-nav-link">
                                <i className="fas fa-arrow-right-from-bracket" />
                                <span> Exit </span>
                                <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="sidebarPagesAuth">
                                <ul className="side-nav-second-level">
                                    <li className="mb-5">
                                        <a href="<?php echo $base_url ?>/logout.php">Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>













                    {/*- End Sidemenu */}
                    <div className="clearfix" />
                </div>
            </div>


        </>
    )
}

export default Sidebar