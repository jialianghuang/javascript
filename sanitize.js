function sanitizeInput(val) {
      return val.replace(/'/g, "").replace(/"/g, "").replace(/</g, "").replace(/>/g, "");
    }
