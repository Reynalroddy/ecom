"use client"

import React, { useState, useRef } from "react";
import { classNames } from "primereact/utils";
// import BlockViewer from "../../blockviewer/BlockViewer";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
// import { Dropdown } from "primereact/dropdown";
// import { FileUpload } from "primereact/fileupload";
// import { InputSwitch } from "primereact/inputswitch";
// import { Badge } from "primereact/badge";
// import { StyleClass } from "primereact/styleclass";
import { Ripple } from "primereact/ripple";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
import { Divider } from "primereact/divider";
import { Checkbox } from "primereact/checkbox";
// import { Avatar } from "primereact/avatar";
// import { Menu } from "primereact/menu";

const Layout = ({children}) => {

    const [activeTab3, setActiveTab3] = useState(0);
  return (
    <section className="flex flex-column py-3 ">
                 
                    <div className="flex flex-column flex-auto">
                        <div className="surface-section px-4 py-4 lg:py-5 lg:px-6 h-full border-round-top-3xl">
                            <div className="flex flex-column md:flex-row w-full justify-content-between md:align-items-center">
                                <div>
                                    <h2 className="mt-0 mb-2 text-900 font-medium text-2xl">
                                        Settings
                                    </h2>
                                    <p className="mt-0 mb-0 text-500">
                                        Vivamus id nisl interdum, blandit augue
                                        sit amet, eleifend mi.
                                    </p>
                                </div>
                                <span className="p-input-icon-right w-full mt-2 md:mt-0 md:w-15rem">
                                    <i className="pi pi-search"></i>
                                    <InputText
                                        placeholder="Search"
                                        className="w-full md:w-15rem border-round"
                                    />
                                </span>
                            </div>
                            <Divider className="my-5"></Divider>
                            <div className="p-fluid flex flex-column lg:flex-row">
                                <ul className="list-none m-0 p-0 flex flex-row lg:flex-column justify-content-between lg:justify-content-start mb-5 lg:mb-0">
                                    <li>
                                        <a
                                            className={classNames(
                                                "lg:w-15rem flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors",
                                                {
                                                    "surface-200":
                                                        activeTab3 === 0,
                                                }
                                            )}
                                            onClick={(e) => setActiveTab3(0)}
                                        >
                                            <i
                                                className={classNames(
                                                    "pi pi-user md:mr-2",
                                                    {
                                                        "text-700":
                                                            activeTab3 === 0,
                                                        "text-600":
                                                            activeTab3 !== 0,
                                                    }
                                                )}
                                            ></i>
                                            <span
                                                className={classNames(
                                                    "font-medium hidden md:block",
                                                    {
                                                        "text-800":
                                                            activeTab3 === 0,
                                                        "text-700":
                                                            activeTab3 !== 0,
                                                    }
                                                )}
                                            >
                                                Profile
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={classNames(
                                                "lg:w-15rem flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors",
                                                {
                                                    "surface-200":
                                                        activeTab3 === 1,
                                                }
                                            )}
                                            onClick={(e) => setActiveTab3(1)}
                                        >
                                            <i
                                                className={classNames(
                                                    "pi pi-cog md:mr-2",
                                                    {
                                                        "text-700":
                                                            activeTab3 === 1,
                                                        "text-600":
                                                            activeTab3 !== 1,
                                                    }
                                                )}
                                            ></i>
                                            <span
                                                className={classNames(
                                                    "font-medium hidden md:block",
                                                    {
                                                        "text-800":
                                                            activeTab3 === 1,
                                                        "text-700":
                                                            activeTab3 !== 1,
                                                    }
                                                )}
                                            >
                                                Account
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={classNames(
                                                "lg:w-15rem flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors",
                                                {
                                                    "surface-200":
                                                        activeTab3 === 2,
                                                }
                                            )}
                                            onClick={(e) => setActiveTab3(2)}
                                        >
                                            <i
                                                className={classNames(
                                                    "pi pi-palette md:mr-2",
                                                    {
                                                        "text-700":
                                                            activeTab3 === 2,
                                                        "text-600":
                                                            activeTab3 !== 2,
                                                    }
                                                )}
                                            ></i>
                                            <span
                                                className={classNames(
                                                    "font-medium hidden md:block",
                                                    {
                                                        "text-800":
                                                            activeTab3 === 2,
                                                        "text-700":
                                                            activeTab3 !== 2,
                                                    }
                                                )}
                                            >
                                                Appearance
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={classNames(
                                                "lg:w-15rem flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors",
                                                {
                                                    "surface-200":
                                                        activeTab3 === 3,
                                                }
                                            )}
                                            onClick={(e) => setActiveTab3(3)}
                                        >
                                            <i
                                                className={classNames(
                                                    "pi pi-sun md:mr-2",
                                                    {
                                                        "text-700":
                                                            activeTab3 === 3,
                                                        "text-600":
                                                            activeTab3 !== 3,
                                                    }
                                                )}
                                            ></i>
                                            <span
                                                className={classNames(
                                                    "font-medium hidden md:block",
                                                    {
                                                        "text-800":
                                                            activeTab3 === 3,
                                                        "text-700":
                                                            activeTab3 !== 3,
                                                    }
                                                )}
                                            >
                                                Accessibility
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={classNames(
                                                "lg:w-15rem flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors",
                                                {
                                                    "surface-200":
                                                        activeTab3 === 4,
                                                }
                                            )}
                                            onClick={(e) => setActiveTab3(4)}
                                        >
                                            <i
                                                className={classNames(
                                                    "pi pi-bell md:mr-2",
                                                    {
                                                        "text-700":
                                                            activeTab3 === 4,
                                                        "text-600":
                                                            activeTab3 !== 4,
                                                    }
                                                )}
                                            ></i>
                                            <span
                                                className={classNames(
                                                    "font-medium hidden md:block",
                                                    {
                                                        "text-800":
                                                            activeTab3 === 4,
                                                        "text-700":
                                                            activeTab3 !== 4,
                                                    }
                                                )}
                                            >
                                                Notifications
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                                <div className=" surface-section surface-card p-5 shadow-2 border-round flex-auto xl:ml-5">
                                    {/* <div className="text-900 font-semibold text-lg mt-3">
                                        Profile

                                    </div>
                                    <Divider></Divider> */}
                                    {/* <div className="flex gap-5 flex-column-reverse md:flex-row">
                                        <div className="flex-auto p-fluid">
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="email"
                                                    className="block font-normal text-900 mb-2"
                                                >
                                                    Name
                                                </label>
                                                <InputText id="email" />
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="bio"
                                                    className="block font-normal text-900 mb-2"
                                                >
                                                    Bio
                                                </label>
                                                <InputTextarea
                                                    id="bio"
                                                    rows="5"
                                                    autoResize="true"
                                                ></InputTextarea>
                                                <p className="mt-2 mb-0 font-medium text-base text-600">
                                                    You can{" "}
                                                    <span className="font-medium text-900">
                                                        @mention
                                                    </span>{" "}
                                                    other users and
                                                    organizations to link to
                                                    them.
                                                </p>
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="website"
                                                    className="block font-normal text-900 mb-2"
                                                >
                                                    URL
                                                </label>
                                                <div className="p-inputgroup">
                                                    <span className="p-inputgroup-addon">
                                                        https://
                                                    </span>
                                                    <InputText id="website" />
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="company"
                                                    className="block font-normal text-900 mb-2"
                                                >
                                                    Company
                                                </label>
                                                <InputText id="company" />
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="visibility"
                                                    className="block font-normal text-900 mb-2"
                                                >
                                                    Profile Visibility
                                                </label>
                                                <div className="flex align-items-center">
                                                    <Checkbox
                                                        inputId="visibility"
                                                        onChange={(e) =>
                                                            setChecked(
                                                                e.checked
                                                            )
                                                        }
                                                        checked={checked}
                                                    ></Checkbox>
                                                    <span className="ml-2 font-normal text-base text-color-primary">
                                                        Make profile private and
                                                        hide all activity
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <Button
                                                    label="Update Profile"
                                                    className="w-auto mt-3"
                                                ></Button>
                                            </div>
                                        </div>
                                        <div className="flex flex-column align-items-center flex-or">
                                            <span className="font-normal text-900 mb-2">
                                                Profile Picture
                                            </span>
                                            <img
                                                src="assets/images/blocks/avatars/circle-big/avatar-f-2.png"
                                                className="h-10rem w-10rem"
                                            />
                                            <Button
                                                icon="pi pi-pencil"
                                                className="p-button-rounded -mt-4"
                                            ></Button>
                                        </div>
                                    </div> */}
{children}
                                   
                                </div>
                            </div>
                            {/* <div className="surface-section px-6 p-3 lg:px-3 mt-5">
                                <div className="flex flex-column sm:flex-row sm:align-items-center justify-content-between">
                                    <div>
                                        <img
                                            src="assets/images/blocks/logos/hyper-900.svg"
                                            alt="Image"
                                            height="40"
                                        />
                                        <p className="mt-2 mb-0 line-height-3 font-medium text-base text-700">
                                            &copy; 202X Hyper, Inc. All rights
                                            reserved.
                                        </p>
                                    </div>
                                    <div className="mt-3 sm:mt-0">
                                        <a className="cursor-pointer text-500 transition-colors transition-duration-150 hover:text-700">
                                            <i className="pi pi-twitter text-xl"></i>
                                        </a>
                                        <a className="cursor-pointer text-500 ml-3 transition-colors transition-duration-150 hover:text-700">
                                            <i className="pi pi-facebook text-xl"></i>
                                        </a>
                                        <a className="cursor-pointer text-500 ml-3 transition-colors transition-duration-150 hover:text-700">
                                            <i className="pi pi-github text-xl"></i>
                                        </a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
  )
}

export default Layout