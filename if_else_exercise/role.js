if (role === "teacher") {
  dashboard = "gradebook";
  permissions = "view/edit/grade";
} else {
  dashboard = "courses";
  permissions = "view";
}

dashboard = "courses";
permissions = "view";

if (role === "teacher") {
  dashboard = "gradebook";
  permissions = "view/edit/grade";
}