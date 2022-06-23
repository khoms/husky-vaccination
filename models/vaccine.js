const mongoose = require("mongoose");

const vaccineSchema = new mongoose.Schema({
  distemper: {
    scheduletime: {
      type: Number,
      default: 50,
    },
    isVaccinated: {
      type: Boolean,
      default: false,
    },
  },

  parvoVirus: {
    scheduletime: {
      type: Number,
      default: 50,
    },
    isVaccinated: {
      type: Boolean,
      default: false,
    },
  },
  leptospirosis: {
    scheduletime: {
      type: Number,
      default: 50,
    },
    isVaccinated: {
      type: Boolean,
      default: false,
    },
  },
  hepatitis: {
    scheduletime: {
      type: Number,
      default: 50,
    },
    isVaccinated: {
      type: Boolean,
      default: false,
    },
  },

  rabies: {
    scheduletime: {
      type: Number,
      default: 50,
    },
    isVaccinated: {
      type: Boolean,
      default: false,
    },
  },
});

module.exports = mongoose.model("vaccine", vaccineSchema);
