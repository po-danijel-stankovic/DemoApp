import { createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { palette } from "./palette";
import { useMemo } from "react";
import "@fontsource/inter/300.css"; // Light weight
import "@fontsource/inter/400.css"; // Regular weight
import "@fontsource/inter/500.css"; // Medium weight
import "@fontsource/inter/700.css"; // Bold weight

const themeJson = require("./theme.json");

// Function to create theme based on screen size
const createResponsiveTheme = (isSmallScreen) => {
  const size = isSmallScreen ? "sm" : "md";

  console.log("PP: ", palette);

  return createTheme({
    cssVariables: true,
    palette: { 
      ...palette, // Map the palette directly from JSON
    },
    typography: {
      ...themeJson.textStyles.typography,
    },
    components: {
      MuiButton: {
        ...themeJson.components.MuiButton,
      },
      MuiButtonGroup: {
        ...themeJson.components.MuiButtonGroup,
      },
      MuiChip: {
        ...themeJson.components.MuiChip,
      },
      MuiCheckbox: {
        ...themeJson.components.MuiCheckbox,
      },
      MuiRadio: {
        ...themeJson.components.MuiRadio,
      },
      MuiSwitch: {
        ...themeJson.components.MuiSwitch,
      },
      MuiFormLabel: {
        ...themeJson.components.MuiFormLabel,
      },
      MuiInputLabel: {
        ...themeJson.components.MuiInputLabel,
      },
      MuiFormHelperText: {
        ...themeJson.components.MuiFormHelperText,
      },
      MuiTooltip: {
        ...themeJson.components.MuiTooltip,
      },
      MuiTableCell: {
        ...themeJson.components.MuiTableCell,
      },
      MuiTableRow: {
        ...themeJson.components.MuiTableRow,
      },
      MuiListItem: {
        ...themeJson.components.MuiListItem,
      },
      MuiBottomNavigationAction: {
        ...themeJson.components.MuiBottomNavigationAction,
      },
      MuiSpeedDial: {
        ...themeJson.components.MuiSpeedDial,
      },
      MuiLink: {
        ...themeJson.components.MuiLink,
      },
      MuiDialogTitle: {
        ...themeJson.components.MuiDialogTitle,
      },
      MuiDialogContent: {
        ...themeJson.components.MuiDialogContent,
      },
      MuiDialogActions: {
        ...themeJson.components.MuiDialogActions,
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            ...themeJson.components.MuiMenuItem.styleOverrides.root[size],
          },
        },
      },
      MuiMenuList: {
        styleOverrides: {
          root: {
            ...themeJson.components.MuiMenuList.styleOverrides.root[size],
          },
        },
      },
      MuiPaper: {
        ...themeJson.components.MuiPaper,
      },
      MuiPaginationItem: {
        ...themeJson.components.MuiPaginationItem,
      },
      MuiPagination: {
        ...themeJson.components.MuiPagination,
      },
      MuiAlert: {
        ...themeJson.components.MuiAlert,
      },
      MuiDivider: {
        ...themeJson.components.MuiDivider,
      },
      MuiInputBase: {
        ...themeJson.components.MuiInputBase,
      },
      MuiAppBar: {
        ...themeJson.components.MuiAppBar
      },
      MuiTextField: {
        ...themeJson.components.MuiTextField,
        MuiToolbar: {
          ...themeJson.components.MuiToolbar,
        },
        MuiIconButton: {
          ...themeJson.components.MuiIconButton,
        }
      }
    }
  });
};

// Hook to get the responsive theme
const useResponsiveTheme = () => {
  const defaultTheme = useMemo(() => createTheme(), []);
  const isSmallScreen = useMediaQuery(defaultTheme.breakpoints.down("sm"));
  return createResponsiveTheme(isSmallScreen);
};

// Exporting theme
export default useResponsiveTheme;
