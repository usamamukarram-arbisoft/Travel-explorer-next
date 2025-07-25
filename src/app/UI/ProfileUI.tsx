"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store";
import { useRouter } from "next/navigation";
import { ROUTES } from "../Util/CommonConstants";

const ProfileUI = () => {
  const navigate = useRouter();
  interface Rating {
    place: string;
    rating: number;
  }

  interface Comment {
    place: string;
    comment: string;
  }

  interface UserInfoType {
    email: string;
    password: string;
    username: string;
    avatar: string;

    phone: string;
    ratings: Rating[];
    comments: Comment[];
  }

  const userData = {
    avatar: "https://github.com/shadcn.png",
    password: "12345",
    phone: "123-456-7890",
    ratings: [
      { place: "Paris", rating: 5 },
      { place: "Tokyo", rating: 4 },
    ],
    comments: [
      { place: "Rome", comment: "Beautiful city!" },
      { place: "Berlin", comment: "Great history!" },
    ],
  };
  const user: any = useSelector((state: RootState) => state.auth.user) || null;
  if (!user) {
    navigate.push(ROUTES.login.route);
  }
  const userInfo: UserInfoType = {
    ...userData,
    email: user.email,
    username: user?.username,
    password: user?.password,
  };

  return (
    <div className="flex justify-center px-4">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-6">
          <img
            src={userInfo.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mx-auto mt-4"
          />
          <div className="bg-white shadow-md rounded-lg mt-6 p-6">
            <h4 className="text-xl font-semibold mt-2">{userInfo.username}</h4>
            <p className="text-gray-500">{userInfo.email}</p>
            <p className="mt-2">
              <strong>phone</strong> {userInfo.phone}
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg mt-6 p-6">
            <h5 className="text-lg font-semibold mb-4">Rating</h5>
            <ul className="space-y-2">
              {userInfo.ratings.map((item: any, index: any) => (
                <li key={index} className="bg-gray-100 px-4 py-2 rounded ">
                  <strong>{item.place}</strong>{" "}
                  {"⭐".repeat(item.rating).padEnd(5, "☆")}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white shadow-md rounded-lg mt-6 p-6">
            <h5 className="text-lg font-semibold mb-4">Comment</h5>
            <ul className="space-y-2">
              {userInfo.comments.map((item: any, index: any) => (
                <li key={index} className="bg-gray-100 px-4 py-2 rounded ">
                  <strong>{item.place}:</strong> {item.comment}
                </li>
              ))}
            </ul>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
export default ProfileUI;
