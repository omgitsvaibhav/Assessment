 const strongPassword = new RegExp(
    "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?!.*(.)\\1\\1)(?=.{6,20})"
  );

  export default strongPassword;