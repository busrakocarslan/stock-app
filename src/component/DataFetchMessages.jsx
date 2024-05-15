import { Alert, AlertTitle, Box, Skeleton, Stack } from "@mui/material";
import React from "react";

export const ErrorMessage = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Unfortunately, the data could not be retrieved
      </Alert>
    </Stack>
  );
};
export const NoDataMessage = () => {
  return (
    <Alert sx={{ mt: 3 }} severity="warning">
      No data found to display
    </Alert>
  )
}

const TableSkeleton = () => {
  return (
    <Box sx={{ width: "90%", margin:"auto" }}>
      <Skeleton animation="wave" variant="rounded" width="100%" height={90} /><br/>
      <Skeleton animation="wave" variant="rounded" width="100%" height={50} /> <br/>
      <Skeleton animation="wave" variant="rounded" width="100%" height={50} /><br/>     
      <Skeleton animation="wave" variant="rounded" width="100%" height={30} />
    </Box>
  );
};

export default TableSkeleton;

// import * as React from 'react';
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
// import Stack from '@mui/material/Stack';

// export default function DescriptionAlerts() {
//   return (
//
//       <Alert severity="success">
//         <AlertTitle>Success</AlertTitle>
//         This is a success Alert with an encouraging title.
//       </Alert>
//       <Alert severity="info">
//         <AlertTitle>Info</AlertTitle>
//         This is an info Alert with an informative title.
//       </Alert>
//       <Alert severity="warning">
//         <AlertTitle>Warning</AlertTitle>
//         This is a warning Alert with a cautious title.
//       </Alert>
//
//     </Stack>
//   );
// }
