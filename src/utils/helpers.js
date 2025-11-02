/** Adds mapped attributes to json */
function addAttributes(json) {
  // Mapping from number to attribute string
  const attrMap = {
    1: "WS",
    2: "BS",
    3: "S",
    4: "T",
    5: "I",
    6: "AG",
    7: "DEX",
    8: "INT",
    9: "WP",
    10: "Fel",
  };

  // Helper function to process an object or array recursively
  function process(obj) {
    if (Array.isArray(obj)) {
      return obj.map(process);
    } else if (obj && typeof obj === "object") {
      // Create a new object to avoid mutating the original
      const newObj = {};
      for (const key of Object.keys(obj)) {
        newObj[key] = process(obj[key]);
        // If this key is "attributes" and is an array, add "_attributes" after it
        if (key === "attributes" && Array.isArray(obj[key])) {
          newObj["_attributes"] = obj[key].map(num => attrMap[num] || num);
        }
      }
      return newObj;
    } else {
      // Primitive value, return as is
      return obj;
    }
  }

  // Start processing from the root
  return process(json);
}

/**Adds mapped class to json */
function addClass(json) {
  // Mapping from number to class string
  const classMap = {
    0: "Academic",
    1: "Burghers",
    2: "Courtier",
    3: "Peasant",
    4: "Ranger",
    5: "Riverfolk",
    6: "Rougue",
    7: "Warrior",
    8: "Seafarer",
  };

  // Helper function to process an object or array recursively
  function process(obj) {
    if (Array.isArray(obj)) {
      return obj.map(process);
    } else if (obj && typeof obj === "object") {
      const newObj = {};
      for (const key of Object.keys(obj)) {
        newObj[key] = process(obj[key]);
        // If this key is "class", add "_class" after it
        if (key === "class") {
          newObj["_class"] = classMap[obj[key]] || obj[key];
        }
      }
      return newObj;
    } else {
      return obj;
    }
  }

  return process(json);
}
