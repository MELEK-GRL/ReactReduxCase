import React from "react";
import {CgMenuGridR} from 'react-icons/cg'
import {AiFillHome} from 'react-icons/ai'
import {useSelector} from 'react-redux'
import { useDispatch } from "react-redux";
import { setNavbarOpen } from "../../store/navbarStore";
import {NavLink} from 'react-router-dom'



export default function Menu({ fixed }) {
  const{navbarOpen}=useSelector(state => state.add)

  const dispatch=useDispatch()

  const navHandle=()=>{
    dispatch(setNavbarOpen())
  }

  return (
    <>
    <div className="p-2  bg-gray-900 w-full items-center justify-center flex">
    <nav className="relative container  w-full flex flex-wrap items-center justify-between ">
        <div className=" flex flex-wrap w-full items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              to='/'
            >
             
             <h1 className=" border-4 p-3 rounded-full bg-gray-700" >MG</h1>
             
            </NavLink>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={navHandle}
            >
             <CgMenuGridR className="w-7 h-7"/>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row gap-2 list-none lg:ml-auto">
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 gap-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to='/'
                >
                  <AiFillHome/><span className="font-semibold text-sm">Home Page</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 gap-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to='/about'
                >
                 <AiFillHome/><span className="font-semibold text-sm">About</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 gap-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to='/favorite'
                >
                 <AiFillHome/><span className="font-semibold text-sm">FAVORITE</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 gap-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/contact"
                >
                 <AiFillHome/><span className="font-semibold text-sm">CONTACT</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
}