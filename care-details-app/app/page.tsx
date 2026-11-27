
"use client";

import { useEffect, useState, type ReactNode } from "react";

const inputClass =
  "w-full h-[52px] rounded-xl border border-[#e7dfd2] bg-[#fffefa] px-4 text-sm font-medium text-[#29251f] outline-none transition-all duration-300 placeholder:font-normal placeholder:text-[#aaa092] hover:-translate-y-0.5 hover:border-[#b58a45] hover:shadow-[0_8px_22px_-15px_rgba(154,113,48,0.65)] focus:border-[#a47b38] focus:ring-4 focus:ring-[#b58a45]/15";

const labelClass =
  "mb-2.5 block text-[11px] font-extrabold uppercase tracking-[0.13em] text-[#625747]";

function FormSection({
  number,
  title,
  description,
  children,
}: {
  number: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="group border-b border-[#eee8df] px-6 py-8 transition-colors duration-300 hover:bg-[#fffefa] sm:px-9">
      <div className="mb-7 flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#eadcc1] bg-gradient-to-br from-[#fbf6e9] to-[#eee0c4] text-sm font-extrabold text-[#866126] shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
          {number}
        </div>
        <div>
          <h3 className="text-lg font-extrabold tracking-tight text-[#29251f]">
            {title}
          </h3>
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  const [carBrand, setCarBrand] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carYear, setCarYear] = useState(0);
  const [carFuel, setCarFuel] = useState("");
  const [carColor, setCarColor] = useState<string[]>([]);
  const [carPrice, setCarPrice] = useState(0);
  const [carCity, setCarCity] = useState("");
  const [carState, setCarState] = useState("");
  const [carEmail, setCarEmail] = useState("");
  const [carDescription, setCarDescription] = useState("");
  const [carImage, setCarImage] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [error, setError] = useState<any>({});

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [allCarData, setAllCarData] = useState<any[]>([]);

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [search, setSearch] = useState("");
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const brands = [
    "Tata Motors", "Mahindra", "Maruti Suzuki", "Hyundai",
    "KIA", "MG", "Jeep", "BMW", "Mercedes-Benz",
    "Volvo", "Toyota", "Honda", "Audi",
  ];

  const fuels = ["Petrol", "Diesel", "CNG", "Electric (EV)", "Hybrid"];

  const colors = [
    "Black", "White", "Navy Blue", "Yellow",
    "Red", "Gray", "Custom",
  ];

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
    "Chhattisgarh", "Goa", "Gujarat", "Haryana",
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
    "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal",
  ];

  const territories = [
    "Andaman and Nicobar Islands", "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi", "Jammu and Kashmir", "Ladakh",
    "Lakshadweep", "Puducherry",
  ];

  useEffect(() => {
    try {
      const savedCarData = localStorage.getItem("allCarData");
      if (savedCarData) {
        const parsedCarData = JSON.parse(savedCarData);
        if (Array.isArray(parsedCarData)) {
          setAllCarData(parsedCarData);
        }
      }
    } catch (error) {
      console.error("Unable to load vehicle records:", error);
    } finally {
      setIsDataLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isDataLoaded) {
      localStorage.setItem("allCarData", JSON.stringify(allCarData));
    }
  }, [allCarData, isDataLoaded]);

  const resetForm = () => {
    setCarBrand("");
    setCarModel("");
    setCarYear(0);
    setCarFuel("");
    setCarColor([]);
    setCarPrice(0);
    setCarCity("");
    setCarState("");
    setCarEmail("");
    setCarDescription("");
    setCarImage("");
    setError({});
    setEditIndex(null);
  };

  const validateForm = () => {
    const errorMsg: Record<string, string> = {};

    if (!carBrand) errorMsg.carBrand = "Please select any car brand";
    if (!carModel) errorMsg.carModel = "Car Model is required";
    if (carYear === 0) errorMsg.carYear = "Car Year is required";
    if (!carFuel) errorMsg.carFuel = "Car Fuel is required";
    if (carColor.length === 0) errorMsg.carColor = "Car Color is required";
    if (carPrice === 0) errorMsg.carPrice = "Car Price is required";
    if (!carCity) errorMsg.carCity = "City is required";
    if (!carState) errorMsg.carState = "Please select state";
    if (!carEmail) errorMsg.carEmail = "Email is required";
    if (!carDescription) errorMsg.carDescription = "Car Description is required";
    if (!carImage) errorMsg.carImage = "Car Image is required";

    setError(errorMsg);
    return Object.keys(errorMsg).length === 0;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addCarData = (e: any) => {
    e.preventDefault();
    if (!validateForm()) return;

    const carData = {
      carBrand, carModel, carYear, carFuel, carColor,
      carPrice, carCity, carState, carEmail,
      carDescription, carImage,
    };

    if (editIndex !== null) {
      const updatedData = allCarData.map((car, index) =>
        index === editIndex ? carData : car
      );
      setAllCarData(updatedData);
      alert("Car Updated Successfully...");
    } else {
      setAllCarData((previous) => [...previous, carData]);
      alert("Form Submitted...");
    }

    resetForm();
  };

  const deleteCarData = (index: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this car?"
    );

    if (!confirmDelete) return;

    const updatedData = allCarData.filter((_, i) => i !== index);
    setAllCarData(updatedData);

    if (editIndex === index) {
      resetForm();
    } else if (editIndex !== null && editIndex > index) {
      setEditIndex(editIndex - 1);
    }
  };

  const editCarData = (index: number) => {
    const car = allCarData[index];

    setCarBrand(car.carBrand);
    setCarModel(car.carModel);
    setCarYear(car.carYear);
    setCarFuel(car.carFuel);
    setCarColor(car.carColor);
    setCarPrice(car.carPrice);
    setCarCity(car.carCity);
    setCarState(car.carState);
    setCarEmail(car.carEmail);
    setCarDescription(car.carDescription);
    setCarImage(car.carImage);

    setError({});
    setEditIndex(index);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const errorClass = (field: string) =>
    error[field]
      ? "border-red-400 bg-[#fff1ef] focus:border-red-500 focus:ring-red-100"
      : "";

  const errorText = (field: string) =>
    error[field] ? (
      <p className="mt-2 text-xs font-medium text-[#b54738]">
        {error[field]}
      </p>
    ) : null;

  const filteredCars = allCarData
    .map((car, index) => ({ car, index }))
    .filter(({ car }) => {
      const query = search.toLowerCase().trim();
      if (!query) return true;

      return [
        car.carBrand,
        car.carModel,
        car.carYear?.toString(),
        car.carFuel,
        car.carCity,
        car.carState,
        car.carEmail,
      ].join(" ").toLowerCase().includes(query);
    });

  return (
    <>
      <style jsx global>{`
        @keyframes luxuryFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        html { scroll-behavior: smooth; }
        body { background: #f4f1eb; }
        input, select, textarea, button {
          -webkit-tap-highlight-color: transparent;
        }
        input:focus-visible, select:focus-visible,
        textarea:focus-visible, button:focus-visible {
          outline: none;
        }
        ::selection {
          background: rgba(181, 138, 69, .22);
          color: #29251f;
        }
        .luxury-enter {
          animation: luxuryFadeUp .65s cubic-bezier(.2,.75,.25,1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            scroll-behavior: auto !important;
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <main className="luxury-enter min-h-screen bg-[#f4f1eb] px-4 py-7 text-slate-900 sm:px-6 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-[1500px] space-y-9">

          <form
            onSubmit={addCarData}
            className="luxury-card overflow-hidden rounded-[1.6rem] border border-[#e7dfd2] bg-white shadow-[0_18px_55px_-32px_rgba(38,32,23,0.35)] transition-all duration-500 hover:shadow-[0_24px_70px_-30px_rgba(38,32,23,0.42)]"
          >
            <div className="flex flex-col justify-between gap-4 border-b border-[#eee8df] bg-gradient-to-r from-[#fffefa] via-white to-[#f8f3e9] px-6 py-8 sm:flex-row sm:items-center sm:px-9">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#9a7130]">
                  Vehicle Registration
                </p>
                <h1 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#29251f] sm:text-3xl">
                  {editIndex !== null ? "Edit Car Details" : "Add New Car"}
                </h1>
                <p className="mt-2 text-sm text-slate-500">
                  {editIndex !== null
                    ? "Update the selected vehicle information."
                    : "Fill in the details to register a vehicle in the system."}
                </p>
              </div>

              <span className="w-fit rounded-full border border-[#eadcc1] bg-[#fbf6e9] px-4 py-2 text-[10px] font-extrabold tracking-[0.16em] text-[#866126] shadow-sm">
                {editIndex !== null ? "EDIT MODE" : "NEW ENTRY"}
              </span>
            </div>

            <FormSection number="01" title="Basic Information" description="Vehicle brand, model and manufacturing information.">
              <div className="grid grid-cols-1 gap-x-7 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label className={labelClass}>Car Brand <span className="text-red-500">*</span></label>
                  <select name="carBrand" value={carBrand} className={`${inputClass} ${errorClass("carBrand")}`} onChange={(e) => setCarBrand(e.target.value)}>
                    <option value="">Select Brand</option>
                    {brands.map((brand) => <option key={brand} value={brand}>{brand}</option>)}
                  </select>
                  {errorText("carBrand")}
                </div>

                <div>
                  <label className={labelClass}>Car Model <span className="text-red-500">*</span></label>
                  <input type="text" name="carModel" value={carModel} onChange={(e) => setCarModel(e.target.value)} placeholder="Enter car model" className={`${inputClass} ${errorClass("carModel")}`} />
                  {errorText("carModel")}
                </div>

                <div>
                  <label className={labelClass}>Manufacturing Year <span className="text-red-500">*</span></label>
                  <input type="number" name="carYear" placeholder="e.g. 2025" value={carYear || ""} onChange={(e) => setCarYear(Number(e.target.value))} className={`${inputClass} ${errorClass("carYear")}`} />
                  {errorText("carYear")}
                </div>

                <div className="sm:col-span-2 lg:col-span-3">
                  <label className={labelClass}>Fuel Type <span className="text-red-500">*</span></label>
                  <div className="flex flex-wrap gap-3">
                    {fuels.map((fuel) => (
                      <label key={fuel} className={`flex cursor-pointer items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${carFuel === fuel ? "border-[#b58a45] bg-[#f8f0df] text-[#866126]" : "border-[#e7dfd2] bg-white text-slate-600 hover:border-[#b58a45]"}`}>
                        <input type="radio" name="carFuel" value={fuel} checked={carFuel === fuel} onChange={(e) => setCarFuel(e.target.value)} className="h-4 w-4 accent-blue-600" />
                        {fuel}
                      </label>
                    ))}
                  </div>
                  {errorText("carFuel")}
                </div>

                <div className="sm:col-span-2 lg:col-span-3">
                  <label className={labelClass}>Available Car Colors <span className="text-red-500">*</span></label>
                  <div className="flex flex-wrap gap-3">
                    {colors.map((color) => (
                      <label key={color} className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${carColor.includes(color) ? "border-[#b58a45] bg-[#f8f0df] text-[#866126]" : "border-[#e7dfd2] bg-white text-slate-600 hover:border-[#b58a45]"}`}>
                        <input type="checkbox" name="carColor" value={color} checked={carColor.includes(color)} onChange={(e) => setCarColor((previous) => e.target.checked ? [...previous, color] : previous.filter((c) => c !== color))} className="h-4 w-4 accent-blue-600" />
                        {color}
                      </label>
                    ))}
                  </div>
                  {errorText("carColor")}
                </div>
              </div>
            </FormSection>

            <FormSection number="02" title="Price Information" description="Enter the ex-showroom price.">
              <div className="max-w-md">
                <label className={labelClass}>Ex-Showroom Price (₹) <span className="text-red-500">*</span></label>
                <div className="flex overflow-hidden rounded-xl border border-[#e7dfd2] transition focus-within:border-[#b58a45] focus-within:ring-4 focus-within:ring-[#b58a45]/10">
                  <span className="flex items-center border-r border-[#e7dfd2] bg-[#f8f6f2] px-5 font-bold text-slate-500">₹</span>
                  <input type="number" name="carPrice" value={carPrice || ""} onChange={(e) => setCarPrice(Number(e.target.value))} placeholder="Enter car price" className={`w-full bg-white px-4 py-3 text-sm font-semibold text-slate-800 outline-none ${errorClass("carPrice")}`} />
                </div>
                {errorText("carPrice")}
              </div>
            </FormSection>

            <FormSection number="03" title="Location Information" description="Enter the city and state.">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>City <span className="text-red-500">*</span></label>
                  <input type="text" name="carCity" value={carCity} onChange={(e) => setCarCity(e.target.value)} placeholder="Enter city" className={`${inputClass} ${errorClass("carCity")}`} />
                  {errorText("carCity")}
                </div>

                <div>
                  <label className={labelClass}>State / Union Territory <span className="text-red-500">*</span></label>
                  <select name="carState" value={carState} className={`${inputClass} ${errorClass("carState")}`} onChange={(e) => setCarState(e.target.value)}>
                    <option value="">Select State</option>
                    <optgroup label="States">
                      {states.map((state) => <option key={state} value={state}>{state}</option>)}
                    </optgroup>
                    <optgroup label="Union Territories">
                      {territories.map((state) => <option key={state} value={state}>{state}</option>)}
                    </optgroup>
                  </select>
                  {errorText("carState")}
                </div>
              </div>
            </FormSection>

            <FormSection number="04" title="Contact Information" description="Contact details associated with the vehicle.">
              <div className="max-w-xl">
                <label className={labelClass}>Email Address <span className="text-red-500">*</span></label>
                <input type="email" name="carEmail" value={carEmail} onChange={(e) => setCarEmail(e.target.value)} placeholder="example@gmail.com" className={`${inputClass} ${errorClass("carEmail")}`} />
                {errorText("carEmail")}
              </div>
            </FormSection>

            <FormSection number="05" title="Additional Details" description="Add a description and vehicle image.">
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>Car Description <span className="text-red-500">*</span></label>
                  <textarea name="carDescription" rows={5} value={carDescription} onChange={(e) => setCarDescription(e.target.value)} placeholder="Enter detailed information about the vehicle..." className={`w-full resize-y rounded-xl border border-[#e7dfd2] bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-[#c9b99f] focus:border-[#a47b38] focus:ring-4 focus:ring-[#b58a45]/15 ${errorClass("carDescription")}`} />
                  {errorText("carDescription")}
                </div>

                <div>
                  <label className={labelClass}>Car Image URL <span className="text-red-500">*</span></label>
                  <input type="text" name="carImage" value={carImage} onChange={(e) => setCarImage(e.target.value)} placeholder="https://example.com/car-image.jpg" className={`${inputClass} ${errorClass("carImage")}`} />
                  {errorText("carImage")}

                  {carImage && (
                    <div className="mt-5 w-fit max-w-full rounded-xl border border-[#e7dfd2] bg-[#f8f6f2] p-3">
                      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">Vehicle Image Preview</p>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={carImage} alt="Car Preview" className="h-52 w-full rounded-lg object-cover sm:w-96" onError={(e) => { e.currentTarget.style.display = "none"; }} onLoad={(e) => { e.currentTarget.style.display = "block"; }} />
                    </div>
                  )}
                </div>
              </div>
            </FormSection>

            <div className="flex flex-col-reverse gap-3 border-t border-[#e7dfd2] bg-[#f8f6f2] px-6 py-6 sm:flex-row sm:items-center sm:justify-end sm:px-9">
              <button type="button" onClick={resetForm} className="h-12 rounded-xl border border-[#d8cbb7] bg-white px-7 text-sm font-bold text-[#625747] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#a47b38] hover:bg-[#fbf7ee] hover:shadow-lg active:scale-[0.98]">
                {editIndex !== null ? "Cancel Editing" : "Reset Form"}
              </button>
              <button type="submit" className="h-12 rounded-xl bg-gradient-to-r from-[#9a7130] to-[#725326] px-9 text-sm font-extrabold tracking-wide text-white shadow-lg shadow-[#9a7130]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#9a7130]/25 active:scale-[0.98]">
                {editIndex !== null ? "Update Car Data" : "Add Car Data"}
              </button>
            </div>
          </form>

          <section className="overflow-hidden rounded-[1.6rem] border border-[#e7dfd2] bg-white shadow-[0_18px_55px_-32px_rgba(38,32,23,0.35)] transition-all duration-500 hover:shadow-[0_24px_70px_-30px_rgba(38,32,23,0.42)]">
            <div className="flex flex-col justify-between gap-5 border-b border-[#e7dfd2] bg-gradient-to-r from-[#fffefa] to-[#f8f3e9] px-6 py-7 sm:flex-row sm:items-center sm:px-8">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#9a7130]">Vehicle Records</p>
                <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#29251f]">Car Inventory</h2>
                <p className="mt-1 text-sm text-slate-500">Complete overview of all registered vehicles.</p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search vehicles..." className={`${inputClass} min-w-0 sm:w-64`} />
                <div className="flex items-center justify-center gap-2 rounded-xl border border-[#eadcc1] bg-[#fbf6e9] px-4 py-3 text-sm font-bold text-[#866126] shadow-sm">
                  Total Records: {allCarData.length}
                </div>
              </div>
            </div>

            {filteredCars.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[1150px] border-collapse text-left">
                  <thead className="bg-[#f8f6f2]">
                    <tr>
                      {["No.", "Image", "Brand", "Model", "Year", "Fuel", "Color", "Price", "City", "State", "Email", "Description", "Actions"].map((heading) => (
                        <th key={heading} className="whitespace-nowrap px-4 py-4 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#766b5c]">
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-[#eee8df]">
                    {filteredCars.map(({ car, index }) => (
                      <tr key={index} className="transition-all duration-300 hover:bg-[#fbf7ee] hover:shadow-[inset_3px_0_0_0_#b58a45]">
                        <td className="px-4 py-5 text-sm font-bold text-slate-400">{String(index + 1).padStart(2, "0")}</td>

                        <td className="px-4 py-5">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={car.carImage} alt={`${car.carBrand} ${car.carModel}`} className="h-12 w-16 rounded-lg border border-[#e7dfd2] object-cover" />
                        </td>

                        <td className="px-4 py-5 text-sm font-bold text-slate-800">{car.carBrand}</td>
                        <td className="px-4 py-5 text-sm font-medium text-slate-600">{car.carModel}</td>
                        <td className="px-4 py-5 text-sm text-slate-600">{car.carYear}</td>

                        <td className="px-4 py-5">
                          <span className="rounded-full bg-[#f8f0df] px-3 py-1.5 text-xs font-semibold text-[#866126]">{car.carFuel}</span>
                        </td>

                        <td className="px-4 py-5">
                          <div className="flex max-w-32 flex-wrap gap-1">
                            {car.carColor.map((color: string) => (
                              <span key={color} className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600">{color}</span>
                            ))}
                          </div>
                        </td>

                        <td className="whitespace-nowrap px-4 py-5 text-sm font-bold text-slate-800">₹{car.carPrice.toLocaleString("en-IN")}</td>
                        <td className="px-4 py-5 text-sm text-slate-600">{car.carCity}</td>
                        <td className="px-4 py-5 text-sm text-slate-600">{car.carState}</td>
                        <td className="max-w-44 break-all px-4 py-5 text-xs text-[#866126]">{car.carEmail}</td>

                        <td className="max-w-48 px-4 py-5 text-xs leading-5 text-slate-500">
                          <p className="line-clamp-3">{car.carDescription}</p>
                        </td>

                        <td className="px-4 py-5">
                          <div className="flex items-center gap-2">
                            <button type="button" onClick={() => editCarData(index)} className="rounded-lg border border-[#eadcc1] bg-[#fbf6e9] px-3 py-2 text-xs font-bold text-[#866126] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8a672f] hover:text-white hover:shadow-md">
                              Edit
                            </button>
                            <button type="button" onClick={() => deleteCarData(index)} className="rounded-lg border border-[#f4d3ce] bg-[#fff1ef] px-3 py-2 text-xs font-bold text-[#b54738] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a83d32] hover:text-white hover:shadow-md">
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-[1.6rem] bg-[#f8f0df] text-[#9a7130]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-9 w-9">
                    <path d="M3 13l2-6h14l2 6v6h-3v-3H6v3H3v-6z" />
                    <path d="M5 13h14M7 17h.01M17 17h.01" />
                  </svg>
                </div>

                <h3 className="text-lg font-bold text-slate-800">
                  {allCarData.length === 0 ? "No Vehicle Records Found" : "No Matching Vehicles"}
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                  {allCarData.length === 0
                    ? "There are currently no registered vehicles. Complete the registration form above to add your first vehicle."
                    : "Try searching with another vehicle brand, model, city or fuel type."}
                </p>
              </div>
            )}

            <div className="flex flex-col justify-between gap-2 border-t border-[#eee8df] bg-[#f8f6f2] px-6 py-4 sm:flex-row sm:items-center sm:px-8">
              <p className="text-xs font-medium text-slate-500">
                Showing {filteredCars.length} of {allCarData.length} vehicle records
              </p>
              <p className="text-xs font-medium text-slate-400">Vehicle Management System</p>
            </div>
          </section>

          <footer className="pb-4 text-center text-xs text-slate-400">
            © {currentYear ?? ""} Automotive Management System. All rights reserved.
          </footer>
        </div>
      </main>
    </>
  );
}