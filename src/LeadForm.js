import React, { useState } from "react";
import DWM_logo from './DWM_Admin.png';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    agent: "",
    title: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    ageBetween18And75: "",
    phone: "",
    email: "",
    callForRateFix: "",
    supplier: "",
    fuelType: "",
    paymentType: "",
    residency: "",
    monthlyGasPayment: "",
    monthlyElectricityPayment: "",
    comments: "",
    smsConsent: false,
    emailConsent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg p-6 rounded-lg mt-10">
      {/* Logo */}
      <div className="text-center mb-6">
        <img src={DWM_logo} alt="DWM Energy Services" className="mx-auto w-32" />
      </div>

      <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">
      Venues Lead Generation Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Agent Details */}
        <label className="block">
          <span className="text-gray-700 font-medium">Agent Name</span>
          <select
            name="agent"
            value={formData.agent}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg"
          >
            <option value="">Select an Agent</option>
            <option value="Installer One">Agent One</option>
            <option value="Installer Two">Agent Two</option>
            <option value="Installer Three">Agent Three</option>
          </select>
        </label>

        {/* Customer Details */}
        <label className="block">
          <span className="text-gray-700 font-medium">Title</span>
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg"
          >
            <option value="">Select Title</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
          </select>
        </label>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />
        <div className="mb-4">
  <label htmlFor="dateOfBirth" className="block text-gray-700 font-medium mb-2">
    Date of Birth
  </label>
  <input
    type="date"
    id="dateOfBirth"
    name="dateOfBirth"
    value={formData.dateOfBirth}
    onChange={handleChange}
    className="w-full p-2 border rounded-lg"
  />
</div>
        {/* <div className="flex items-center justify-between">
  <span className="text-gray-700 font-medium">Are you between the ages of 18 and 75?</span>
  <label className="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      name="ageBetween18And75"
      checked={formData.ageBetween18And75}
      onChange={(e) =>
        setFormData({ ...formData, ageBetween18And75: e.target.checked })
      }
      className="sr-only peer"
    />
    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-lime-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-lime-400"></div>
    <span className="ml-3 text-gray-900">{formData.ageBetween18And75 ? "Yes" : "No"}</span>
  </label>
</div> */}

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />
        {/* <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        /> */}

       


        {/* Marketing Preferences */}
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="smsConsent"
            checked={formData.smsConsent}
            onChange={handleChange}
            className="h-5 w-5"
          />
          <span>I am happy to receive a call from Scottish Power about my Gas & Electricity supply.</span>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-950 text-white py-3 rounded-lg hover:bg-blue-900"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
