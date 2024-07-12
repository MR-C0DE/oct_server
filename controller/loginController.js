import AuthUtils from "../configuration/auth.js";



class LoginController {
  static async connect(request, response) {
    const user = {
      id: 1,
    };

    try {
      const token = AuthUtils.generateToken(user);
      response.status(200).json({ token });
    } catch (error) {
      response.status(500).json({ message: "Internal server error" });
    }
  }

}

export { LoginController };
