import { createContext, useState } from "react";
export const TipContext = createContext();

export const TipProvider = ({ children }) => {
  const [tips, setTips] = useState();

  const [filteredTips, setFilteredTips] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //since the frontend was written first, I will convert the backend data to the same format as the frontend ie arrays

  // the pre-loaded tips did not have date but user-created tips do
  function convertToArrayFormat(input) {
    return input.flatMap((obj) =>
      Object.values(obj).map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        language: item.language,
        date: item.date || null, // Include the date if it exists
      }))
    );
  }

  const fetchTips = async () => {
    const response = await fetch(`${import.meta.env.VITE_DBHOST_URL}/tips`);
    const tips = await response.json();
    const tipsArray = convertToArrayFormat(tips);
    tipsArray.sort((a, b) => {
      const hasDateA = !!a.date;
      const hasDateB = !!b.date;
      // sort by date if they both have date property
      if (hasDateA && hasDateB) {
        return new Date(b.date) - new Date(a.date);
      }
      // a comes first if it has a date and b doesn't
      if (hasDateA) {
        return -1;
      }
      // b comes first if it has a date and a doesn't
      if (hasDateB) {
        return 1;
      }
      // Neither has a date, maintain their relative order
      return 0;
    });
    setTips(tipsArray);
    setIsLoading(false);
  };
  return (
    <TipContext.Provider
      value={{
        tips,
        setTips,
        filteredTips,
        setFilteredTips,
        fetchTips,
        convertToArrayFormat,
        showModal,
        setShowModal,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </TipContext.Provider>
  );
};
export default TipContext;
