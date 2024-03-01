import { Box } from "@mui/material";
import {
  DataGridPremium,
  GridColDef,
  GridEventListener,
  GridRowEditStopReasons,
  GridRowModel,
  GridRowModesModel,
  GridRowsProp,
} from "@mui/x-data-grid-premium";
import colorConfigs from "../../../configs/colorConfigs";

const styleBox = {
  height: "70vh",
  width: "100%",
  position: "absolute",
  "& .super-app-theme--header": {
    backgroundColor: colorConfigs.table.bg,
    color: colorConfigs.table.color,
  },
  "& .MuiDataGrid-columnHeaders .MuiSvgIcon-root ": {
    color: colorConfigs.table.color,
  },
};

type Props = {
  initialRow: GridRowsProp;
  columns: GridColDef[];
  rowModesModel?: GridRowModesModel;
  setRowModesModel: React.Dispatch<React.SetStateAction<GridRowModesModel>>;
  processRowUpdate: (newRow: GridRowModel) => GridRowModel;
  setRows: React.Dispatch<React.SetStateAction<GridRowsProp>>;
};

const TableUI = (props: Props) => {
  const {
    initialRow,
    columns,
    rowModesModel,
    setRowModesModel,
    processRowUpdate,
    setRows,
  } = props;
  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };
  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  return (
    <Box sx={styleBox}>
      <DataGridPremium
        columns={columns}
        rows={initialRow}
        editMode="row"
        pagination
        autoPageSize
        experimentalFeatures={{ lazyLoading: true }}
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={(newRows) => processRowUpdate(newRows)}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
  );
};

export default TableUI;
