import GoogleIcon from "@mui/icons-material/Google";

export default function SignOnGoogle() {
  return (
    <button className="flex justify-center items-center w-80 h-12 border-black border-2 py-4 my-4">
      <GoogleIcon /> <span className="ml-4"> Continue with Google</span>
    </button>
  );
}
