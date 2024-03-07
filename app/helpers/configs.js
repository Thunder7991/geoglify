const CARGOS = [
  { "code": 0, "name": "Not available (default)", "color": "#C0C0C0", "priority": -1 },
  { "code": 20, "name": "Wing in ground (WIG), all ships of this type", "color": "#FFFF00", "priority": 5 },
  { "code": 21, "name": "Wing in ground (WIG), Hazardous category A", "color": "#FFFF00", "priority": 6 },
  { "code": 22, "name": "Wing in ground (WIG), Hazardous category B", "color": "#FFFF00", "priority": 6 },
  { "code": 23, "name": "Wing in ground (WIG), Hazardous category C", "color": "#FFFF00", "priority": 6 },
  { "code": 24, "name": "Wing in ground (WIG), Hazardous category D", "color": "#FFFF00", "priority": 6 },
  { "code": 30, "name": "Fishing", "color": "#008000", "priority": 3 },
  { "code": 31, "name": "Towing", "color": "#800080", "priority": 4 },
  { "code": 32, "name": "Towing, length exceeds 200m or breadth exceeds 25m", "color": "#800080", "priority": 4 },
  { "code": 33, "name": "Dredging or underwater ops", "color": "#FF0000", "priority": 4 },
  { "code": 34, "name": "Diving ops", "color": "#FF0000", "priority": 4 },
  { "code": 35, "name": "Military ops", "color": "#000000", "priority": 5 },
  { "code": 36, "name": "Sailing", "color": "#FFA500", "priority": 2 },
  { "code": 37, "name": "Pleasure Craft", "color": "#FFFF00", "priority": 2 },
  { "code": 40, "name": "High speed craft (HSC), all ships of this type", "color": "#0000FF", "priority": 3 },
  { "code": 41, "name": "High speed craft (HSC), Hazardous category A", "color": "#0000FF", "priority": 4 },
  { "code": 42, "name": "High speed craft (HSC), Hazardous category B", "color": "#0000FF", "priority": 4 },
  { "code": 43, "name": "High speed craft (HSC), Hazardous category C", "color": "#0000FF", "priority": 4 },
  { "code": 44, "name": "High speed craft (HSC), Hazardous category D", "color": "#0000FF", "priority": 4 },
  { "code": 50, "name": "Pilot Vessel", "color": "#808080", "priority": 3 },
  { "code": 51, "name": "Search and Rescue vessel", "color": "#FF0000", "priority": 3 },
  { "code": 52, "name": "Tug", "color": "#808080", "priority": 4 },
  { "code": 53, "name": "Port Tender", "color": "#FFA500", "priority": 3 },
  { "code": 54, "name": "Anti-pollution equipment", "color": "#FFA500", "priority": 3 },
  { "code": 55, "name": "Law Enforcement", "color": "#0000FF", "priority": 5 },
  { "code": 58, "name": "Medical Transport", "color": "#808080", "priority": 4 },
  { "code": 60, "name": "Passenger, all ships of this type", "color": "#ff00b0", "priority": 2 },
  { "code": 61, "name": "Passenger, Hazardous category A", "color": "#ff00b0", "priority": 3 },
  { "code": 62, "name": "Passenger, Hazardous category B", "color": "#ff00b0", "priority": 3 },
  { "code": 63, "name": "Passenger, Hazardous category C", "color": "#ff00b0", "priority": 3 },
  { "code": 64, "name": "Passenger, Hazardous category D", "color": "#ff00b0", "priority": 3 },
  { "code": 70, "name": "Cargo, all ships of this type", "color": "#000000", "priority": 4 },
  { "code": 71, "name": "Cargo, Hazardous category A", "color": "#000000", "priority": 5 },
  { "code": 72, "name": "Cargo, Hazardous category B", "color": "#000000", "priority": 5 },
  { "code": 73, "name": "Cargo, Hazardous category C", "color": "#000000", "priority": 5 },
  { "code": 74, "name": "Cargo, Hazardous category D", "color": "#000000", "priority": 5 },
  { "code": 80, "name": "Tanker, all ships of this type", "color": "#800000", "priority": 5 },
  { "code": 81, "name": "Tanker, Hazardous category A", "color": "#800000", "priority": 6 },
  { "code": 82, "name": "Tanker, Hazardous category B", "color": "#800000", "priority": 6 },
  { "code": 83, "name": "Tanker, Hazardous category C", "color": "#800000", "priority": 6 },
  { "code": 84, "name": "Tanker, Hazardous category D", "color": "#800000", "priority": 6 },
  { "code": 90, "name": "Other Type, all ships of this type", "color": "#A52A2A", "priority": 1  },
  { "code": 91, "name": "Other Type, Hazardous category A", "color": "#A52A2A", "priority": 1  },
  { "code": 92, "name": "Other Type, Hazardous category B", "color": "#A52A2A", "priority": 1  },
  { "code": 93, "name": "Other Type, Hazardous category C", "color": "#A52A2A", "priority": 1  },
  { "code": 94, "name": "Other Type, Hazardous category D", "color": "#A52A2A", "priority": 1  }
];
export default {

  getCategories() {
    const categorizedCargos = new Map();
  
    CARGOS.forEach((cargo) => {
      const category = cargo.name.split(',')[0].trim();
      if (!categorizedCargos.has(category)) {
        categorizedCargos.set(category, {
          color: cargo.color,
          name: category,
          cargos: [],
          isActive: true
        });
      }
      categorizedCargos.get(category).cargos.push(cargo);
      categorizedCargos.get(category).priority = Math.max(
        categorizedCargos.get(category).priority || 0,
        cargo.priority
      );
    });
  
    return categorizedCargos;
  },

  getCargos()
  {
    return CARGOS;
  },

  getCargoType(code) {
    return CARGOS.find((cargo) => cargo.code === code) || CARGOS[0];
  },

  hexToRgb(hex) {
    hex = hex.replace(/^#/, "");

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return [r, g, b];
  },
};
