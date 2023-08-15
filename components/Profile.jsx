"use client"
import React,{useState,useEffect} from 'react'
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { FileUpload } from 'primereact/fileupload';
import { updateUser,updatePassword } from '../redux/supporters';
import { useRouter } from "next/navigation";
        
const Profile = () => {
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [avatar, setAvatar] = useState("");
    const [visible4, setVisible4] = useState(false);
    const [avatarPreview, setAvatarPreview] = useState("/images/default.png");
    const { userInfo,isLoading } = useSelector((state) => state.user);
    const router = useRouter();
    // console.log(userInfo);
    const reg= ()=>{

        const formData = new FormData();
        formData.set("name", name);
        formData.set("email", email);
        formData.set("image", avatar);
    
        updateUser(formData,dispatch,router);
    }

    const regP= ()=>{
        updatePassword(currentPassword,newPassword,router);
        setVisible4(false)
    }
    const onChange = (e) => {
        const reader = new FileReader();
    
        reader.onload = () => {
          if (reader.readyState === 2) {
            setAvatarPreview(reader.result);
          }
        };
    
        setAvatar(e.target.files[0]);
        reader.readAsDataURL(e.target.files[0]);
      };

      useEffect(() => {
        if (userInfo) {
          setName(userInfo.name);
          setEmail(userInfo.email);
          setAvatarPreview(userInfo.avatar?.url || '/images/default.png')
        }
    
       
      }, [ userInfo]);
    
    //   const submitHandler = (e) => {
    //     e.preventDefault();
    
    //     const formData = new FormData();
    //     formData.set("name", name);
    //     formData.set("email", email);
    //     formData.set("image", avatar);
    
    //     updateUser(formData,dispatch);
    //   };
  return (
    <>
    <div className="text-900 font-semibold text-lg mt-3">
                                        Profile
                                        {/* bread crumbs */}
                                    </div>
                                    <Divider></Divider>
                                    <div className="flex gap-5 flex-column-reverse md:flex-row">
                                        <div className="flex-auto p-fluid">
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="email"
                                                    className="block font-normal text-900 mb-2"
                                                >
                                                   Name
                                                </label>
                                                <InputText id="name" value= {name} onChange={(e)=>setName(e.target.value)} />
                                            </div>

                                            <div className="mb-4">
                                                <label
                                                    htmlFor="email"
                                                    className="block font-normal text-900 mb-2"
                                                >
                                                   Email
                                                </label>
                                                <InputText id="email" value= {email} onChange={(e)=>setEmail(e.target.value)} />
                                            </div>
                                           
                                           
                                           
                                        
                                            <div>
                                                <Button
                                                onClick={reg}
                                                    label={isLoading?'loading...':"Update Profile"}
                                                    className="w-auto mt-3"
                                                ></Button>


                                    <Button
                                    // onClick={regP}
                    label="update password"
                    onClick={() => setVisible4(true)}
                    className="w-auto mx-3"
                ></Button>
                                            </div>
                                        </div>
                                        <div className="flex flex-column align-items-center flex-or">
                                            <span className="font-normal text-900 mb-2">
                                                Profile Picture
                                            </span>
                                            <img
                                                // src={userInfo?.avatar ? userInfo?.avatar?.url : "/images/default.png"}
                                                src={avatarPreview}
                                                className="h-10rem w-10rem"
                                            />
                                            {/* <Button
                                                icon="pi pi-pencil"
                                                className="p-button-rounded -mt-4"
                                            ></Button> */}
                                             <input
                  className="form-control block w-full px-2 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-6"
                  type="file"
                  id="formFile"
                  onChange={onChange}
                />
                                            {/* <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={5000000} onUpload={onUpload} /> */}
                                        </div>
                                    </div>




                <Dialog
                    visible={visible4}
                    onHide={() => setVisible4(false)}
                    modal
                    breakpoints={{ "960px": "75vw", "640px": "100vw" }}
                    header={
                        <div className="flex flex-column gap-2">
                            <h1 className="m-0 text-900 font-semibold text-xl line-height-3">
                                Edit Password
                            </h1>
                            <span className="text-600 text-base font-normal">
                                Quis enim lobortis scelerisque fermentum dui
                                faucibus in ornare quam.
                            </span>
                        </div>
                    }
                    footer={
                        <div className="flex gap-3 justify-content-end border-top-1 surface-border pt-5">
                            <Button
                                label="Cancel"
                                onClick={() => setVisible4(false)}
                                className="p-button-text"
                            ></Button>
                            <Button
                                label="Update"
                                // onClick={() => setVisible4(false)}
                                onClick={regP}
                                className="p-button-rounded"
                            ></Button>
                        </div>
                    }
                    style={{ width: "52vw" }}
                    draggable={false}
                    resizable={false}
                >
                    <form className="flex flex-column gap-3 mt-3">
                        <div>
                            <label
                                htmlFor="cardholder"
                                className="block mb-1 text-color text-base"
                            >
                                current password
                            </label>
                            <span className="p-input-icon-left w-full">
                                <i className="pi pi-user"></i>
                                <InputText type="password" className="w-full mb-3" onChange={(e)=>setCurrentPassword(e.target.value)} />
                            </span>
                        </div>
                        <div>
                            <label
                                htmlFor="credit-card"
                                className="block mb-1 text-color text-base"
                            >
                                new password
                            </label>
                            <span className="p-input-icon-left w-full">
                                <i className="pi pi-credit-card"></i>
                                <InputText type="password" className="w-full mb-3" onChange={(e)=>setNewPassword(e.target.value)} />
                            </span>
                        </div>
                       
                    </form>
                </Dialog>
                                    
                                    </>




  )
}

export default Profile