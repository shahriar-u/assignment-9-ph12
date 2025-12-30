import React, { useContext, useEffect } from "react";
import { AuthContextAPI } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

const Profile = () => {
  const { user, handelUpdate, localUser, setLocalUser } = useContext(AuthContextAPI);

  
  useEffect(() => {
    if (user) {
      setLocalUser({
        displayName: user?.displayName || "",
        photoURL: user?.photoURL || "",
      });
    }
  }, [user, setLocalUser]);

  const openUpdateModal = () => {
    Swal.fire({
      title: '<h2 class="text-[#2d3a5e] font-black text-2xl">Update Profile</h2>',
      html: `
        <div class="flex flex-col gap-4 p-2 text-left">
          <div>
            <label class="text-[10px] font-bold text-gray-400 uppercase ml-1 tracking-wider">Display Name</label>
            <input id="swal-input-name" class="swal2-input !m-0 !w-full custom-input" placeholder="Your Name" value="${localUser?.displayName}">
          </div>
          <div>
            <label class="text-[10px] font-bold text-gray-400 uppercase ml-1 tracking-wider">Photo URL</label>
            <input id="swal-input-photo" class="swal2-input !m-0 !w-full custom-input" placeholder="https://image-link.com" value="${localUser?.photoURL}">
          </div>
        </div>
        <style>
          .custom-input {
            border-radius: 15px !important;
            border: 1px solid #e2e8f0 !important;
            font-size: 14px !important;
            padding: 12px 15px !important;
            font-family: inherit !important;
          }
          .custom-input:focus { border-color: #ec4899 !important; box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1) !important; outline: none !important; }
        </style>
      `,
      showCancelButton: true,
      confirmButtonText: "Save Changes",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#ec4899",
      cancelButtonColor: "#2d3a5e",
      focusConfirm: false,
      preConfirm: () => {
        const name = document.getElementById("swal-input-name").value.trim();
        const photo = document.getElementById("swal-input-photo").value.trim();
        
        if (!name && !photo) {
          Swal.showValidationMessage("Please provide at least one detail to update");
          return false;
        }
        return { name, photo };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { name, photo } = result.value;

        
        handelUpdate(name || localUser?.displayName, photo || localUser?.photoURL)
          .then(() => {
            
            setLocalUser({
              displayName: name || localUser?.displayName,
              photoURL: photo || localUser?.photoURL,
            });

            Swal.fire({
              icon: "success",
              title: "Profile Updated!",
              text: "Changes applied successfully without reload.",
              timer: 2000,
              showConfirmButton: false,
              background: '#fff',
              color: '#2d3a5e'
            });
          })
          .catch((error) => {
            toast.error("Update failed: " + error.message);
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#F2F5F7] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">
          
          
          <div className="bg-[#1e2746] h-48 relative">
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-100 ring-8 ring-pink-50/50">
                <img
                  src={localUser?.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                />
              </div>
            </div>
          </div>

          <div className="pt-24 pb-12 px-8 text-center">
            <h2 className="text-4xl font-black text-[#2d3a5e] mb-2 tracking-tight">
              {localUser?.displayName || "User Name"}
              <span className="text-pink-500">.</span>
            </h2>
            <p className="text-pink-500 font-bold uppercase tracking-[0.2em] text-xs mb-10">
              {user?.emailVerified ? "Verified Member" : "Active Member"}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
              <div className="bg-gray-50/50 p-6 rounded-[30px] border border-gray-100 flex flex-col items-center">
                <span className="text-[10px] font-black text-gray-400 uppercase mb-2 tracking-widest">
                  Email Address
                </span>
                <span className="text-[#2d3a5e] font-bold break-all">
                  {user?.email || "Not Provided"}
                </span>
              </div>

              <div className="bg-gray-50/50 p-6 rounded-[30px] border border-gray-100 flex flex-col items-center">
                <span className="text-[10px] font-black text-gray-400 uppercase mb-2 tracking-widest">
                  Account Status
                </span>
                <span className="text-lime-500 font-black italic flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-500 rounded-full animate-pulse"></span>
                  Active Account
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={openUpdateModal}
                className="bg-[#2d3a5e] text-white px-12 py-4 rounded-2xl font-black hover:bg-pink-500 transition-all duration-500 shadow-lg hover:shadow-pink-200 active:scale-95 uppercase tracking-widest text-xs"
              >
                Update Profile
              </button>
            </div>
          </div>

          <div className="bg-gray-50/30 py-6 px-8 text-center border-t border-gray-100">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em]">
              CarePress Pet Care System &copy; 2025
            </p>
          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Profile;