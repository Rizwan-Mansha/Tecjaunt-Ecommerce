import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import axios from "axios";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    const res = await axios.post(
      `${process.env.BASE_URL}/api/login-customer`,
      {
        email: email,
        password: password,
      }
    );

    console.log("Login Response:", res.data.token); // Log the response for debugging
    if (res.status === 200) { 
      const apiToken = res.data.token;

      // Handle potential missing token in the response
      if (!apiToken) {
        throw new Error("Missing API token in response");
      }

      const token = jwt.sign(
        { tokenId: apiToken, email: email }, // Assuming `email` is accessible
        process.env.TOKEN_SECRET,
        {
          expiresIn: "1d",
        }
      );

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  }
  } catch (error) {
    console.error("Login Error:", error.message); // Log the error for debugging

    let errorMessage = "An unexpected error occurred during login.";

    if (error.response?.status === 401) {
      errorMessage = "Invalid email or password. Please try again.";
    } else if (error.response?.status >= 500) {
      errorMessage = "The server encountered an issue. Please try again later.";
    }

    return NextResponse.json({ error: errorMessage }, { status: 400 }); // Use 400 for generic client errors
  }
}
