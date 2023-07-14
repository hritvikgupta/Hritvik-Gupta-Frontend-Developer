import { useState, useEffect } from "react";

const useCapsuleSearch = (initialCapsules) => {
  const [capsules, setCapsules] = useState(initialCapsules);
  const [filterStatus, setFilterStatus] = useState("");
  const [filterOriginalLaunch, setFilterOriginalLaunch] = useState("");
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    const filteredCapsules = initialCapsules.filter((capsule) => {
      if (filterStatus && capsule.status !== filterStatus) return false;
      if (filterOriginalLaunch && capsule.original_launch !== filterOriginalLaunch) return false;
      if (filterType && capsule.type !== filterType) return false;
      return true;
    });

    setCapsules(filteredCapsules);
  }, [initialCapsules, filterStatus, filterOriginalLaunch, filterType]);

  return {
    capsules,
    setFilterStatus,
    setFilterOriginalLaunch,
    setFilterType,
  };
};

export default useCapsuleSearch