if (userType === "admin") {
  baseAccess = "all";
  canDelete = true;
} else {
  baseAccess = "limited";
  canDelete = false;
}

baseAccess = "limited";
canDelete = false;

if (userType === "admin") {
  baseAccess = "all";
  canDelete = true;
}