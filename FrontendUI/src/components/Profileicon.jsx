import React from 'react';
import { UserCircle } from 'lucide-react';

const ProfileIcon = ({ userName, userEmail }) => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <UserCircle size={40} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between" href='/profile'>
            Profile
          </a>
        </li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  );
};

export default ProfileIcon;