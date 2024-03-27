import MicrosoftIcon from '@mui/icons-material/Microsoft';

export default function SignOnMicrosoft() {
  return (
    <button className="flex justify-center items-center w-80 h-12 border-black border-2 py-5 my-4">
      <MicrosoftIcon /> <span className="ml-4"> Continue with Microsoft</span>
    </button>
  );
}
