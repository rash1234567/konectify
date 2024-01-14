"use client";
import React from "react";
import speaker from "@public/assets/Speaker2.svg";
import logo from "@public/assets/logo-black.svg";
import Image from "next/image";
import { Form, Input, Button, Checkbox } from "antd";
import profileIcon from "@public/assets/profile.svg";
import businessIcon from "@public/assets/business.svg";
import optionIcon from "@public/assets/option.svg";
import mailIcon from "@public/assets/mail.svg";
import passwordIcon from "@public/assets/password.svg";
import phoneIcon from "@public/assets/call.svg";
import addressIcon from "@public/assets/address.svg";

function page() {
  return (
    <div className="w-[100%] px-[2%] lg:px-[3%] xl:px-[7%] flex flex-col md:flex-row justify-between pt-8 md:pt-12 lg:pt-24 bg-[#F8F3F1]">
      <div className="flex flex-col md:w-[48%] ">
        <Image
          src={logo}
          alt="logo"
          className="w-[50%] md:w-[40%] lg:w-[40%] xl:w-[35%]"
        />
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-4  md:mt-6 lg:mt-8">
          Signup
        </h1>
        <Form className="mt-4 md:mt-6 lg:mt-8 w-full" autoComplete="off">
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              placeholder="Your Name"
              size="large"
              variant="borderless"
              style={{ backgroundColor: "#F8F3F1" }}
              prefix={<Image src={profileIcon} alt="profile" />}
            />
          </Form.Item>
          <Form.Item
            name="business_name"
            rules={[
              { required: true, message: "Please input your business name!" },
            ]}
          >
            <Input
              placeholder="Business Name"
              size="large"
              variant="borderless"
              style={{ backgroundColor: "#F8F3F1" }}
              prefix={<Image src={businessIcon} alt="business" />}
            />
          </Form.Item>
          <Form.Item
            name="business_niche"
            rules={[
              { required: true, message: "Please input your business niche!" },
            ]}
          >
            <Input
              placeholder="Business Niche"
              size="large"
              variant="borderless"
              style={{ backgroundColor: "#F8F3F1" }}
              prefix={<Image src={optionIcon} alt="business" />}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              placeholder="Email"
              size="large"
              variant="borderless"
              style={{ backgroundColor: "#F8F3F1" }}
              prefix={<Image src={mailIcon} alt="mail" />}
            />
          </Form.Item>
        
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="Password"
              size="large"
              variant="borderless"
              style={{ backgroundColor: "#F8F3F1" }}
              prefix={<Image src={passwordIcon} alt="password" />}
            />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: "Please input your phone number!" }]}
          >
            <Input
              placeholder=""
              size="large"
              variant="borderless"
              style={{ backgroundColor: "#F8F3F1" }}
              prefix={<Image src={mailIcon} alt="mail" />}
            />
          </Form.Item>
        </Form>
      </div>
      <div className="mt-2 hidden md:flex md:mt-0 md:w-[48%]">
        <Image src={speaker} alt="speaker" className="w-[100%]" />
      </div>
    </div>
  );
}

export default page;
