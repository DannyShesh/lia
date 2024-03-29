import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
  {
    label: 'aaaaaaa',
    image: '/info.jpg',
  },
  {
    label: 'bbbb',
    image: '/2.jpg',
  },
  {
    label: 'cccc',
    image: '/3.jpg',
  },
  {
    label: 'cccc',
    image: '/4.jpg',
  },
  {
    label: 'cccc',
    image: '/5.jpg',
  },
  {
    label: 'cccc',
    image: '/webb.jpg',
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className='w-full h-screen '>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Center horizontally
        height: '100%', // Adjust the height as desired
        width: "100%"
      }}
    >
      <Box sx={{ maxWidth: "80%",  flexGrow: 1 }}> {/* Adjust maxWidth as desired */}
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 70, // Adjust the height of the header as desired
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
          <Typography>{steps[activeStep].label}</Typography>
        </Paper>
        <Box sx={{ height: "80vh" ,  width: '100%', p: 2 }}> {/* Adjust height and maxWidth as desired */}
          <img src={steps[activeStep].image} alt={steps[activeStep].label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </Box>
    </div>
  );
}
