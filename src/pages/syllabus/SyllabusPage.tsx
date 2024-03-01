import { Box, Divider, Stack } from "@mui/material";
import TypographyUI from "../../components/ui/typography/TypographyUI";
import InputSearch from "../../components/ui/input/InputSearch";
import InputDate from "../../components/ui/input/InputDate";
import ButtonUI from "../../components/ui/button/ButtonUI";
import {
  Cancel,
  ControlPoint,
  Delete,
  Edit,
  Publish,
} from "@mui/icons-material";
import Note from "../../components/ui/note/Note";
import TableUI from "../../components/ui/table";
import {
  GridActionsCellItem,
  GridColDef,
  GridRowId,
  GridRowModel,
  GridRowModes,
  GridRowModesModel,
  GridRowsProp,
  GridSaveAltIcon,
} from "@mui/x-data-grid-premium";
import { randomDate, randomID } from "../../utils/random";
import { useState } from "react";

const initialRow: GridRowsProp = [
  {
    id: randomID(),
    syllabus: "C# basic program",
    code: "CBG",
    createdDate: randomDate(),
    createdBy: "HaNTT2",
    duration: "7 days",
    outputStandard: ["H4SD", "K6SD"],
    status: "active",
  },
  {
    id: randomID(),
    syllabus: "C# basic program",
    code: "CBG",
    createdDate: randomDate(),
    createdBy: "HaNTT2",
    duration: "7 days",
    outputStandard: ["H4SD", "K6SD"],
    status: "active",
  },
  {
    id: randomID(),
    syllabus: "C# basic program",
    code: "CBG",
    createdDate: randomDate(),
    createdBy: "HaNTT2",
    duration: "7 days",
    outputStandard: ["H4SD", "K6SD"],
    status: "active",
  },
  {
    id: randomID(),
    syllabus: "C# basic program",
    code: "CBG",
    createdDate: randomDate(),
    createdBy: "HaNTT2",
    duration: "7 days",
    outputStandard: ["H4SD", "K6SD"],
    status: "active",
  },
  {
    id: randomID(),
    syllabus: "C# basic program",
    code: "CBG",
    createdDate: randomDate(),
    createdBy: "HaNTT2",
    duration: "7 days",
    outputStandard: ["H4SD", "K6SD"],
    status: "active",
  },
  {
    id: randomID(),
    syllabus: "C# basic program",
    code: "CBG",
    createdDate: randomDate(),
    createdBy: "HaNTT2",
    duration: "7 days",
    outputStandard: ["H4SD", "K6SD"],
    status: "active",
  },
  {
    id: randomID(),
    syllabus: "C# basic program",
    code: "CBG",
    createdDate: randomDate(),
    createdBy: "HaNTT2",
    duration: "7 days",
    outputStandard: ["H4SD", "K6SD"],
    status: "active",
  },
  {
    id: randomID(),
    syllabus: "C# basic program",
    code: "CBG",
    createdDate: randomDate(),
    createdBy: "HaNTT2",
    duration: "7 days",
    outputStandard: ["H4SD", "K6SD"],
    status: "active",
  },
  {
    id: randomID(),
    syllabus: "C# basic program",
    code: "CBG",
    createdDate: randomDate(),
    createdBy: "HaNTT2",
    duration: "7 days",
    outputStandard: ["H4SD", "K6SD"],
    status: "active",
  },
  {
    id: randomID(),
    syllabus: "C# basic program",
    code: "CBG",
    createdDate: randomDate(),
    createdBy: "HaNTT2",
    duration: "7 days",
    outputStandard: ["H4SD", "K6SD"],
    status: "active",
  },
  {
    id: randomID(),
    syllabus: "C# basic program",
    code: "CBG",
    createdDate: randomDate(),
    createdBy: "HaNTT2",
    duration: "7 days",
    outputStandard: ["H4SD", "K6SD"],
    status: "active",
  },
  {
    id: randomID(),
    syllabus: "C# basic program",
    code: "CBG",
    createdDate: randomDate(),
    createdBy: "HaNTT2",
    duration: "7 days",
    outputStandard: ["H4SD", "K6SD"],
    status: "active",
  },
  {
    id: randomID(),
    syllabus: "C# basic program",
    code: "CBG",
    createdDate: randomDate(),
    createdBy: "HaNTT2",
    duration: "7 days",
    outputStandard: ["H4SD", "K6SD"],
    status: "active",
  },
  {
    id: randomID(),
    syllabus: "C# basic program",
    code: "CBG",
    createdDate: randomDate(),
    createdBy: "HaNTT2",
    duration: "7 days",
    outputStandard: ["H4SD", "K6SD"],
    status: "active",
  },
  {
    id: randomID(),
    syllabus: "C# basic program",
    code: "CBG",
    createdDate: randomDate(),
    createdBy: "HaNTT2",
    duration: "7 days",
    outputStandard: ["H4SD", "K6SD"],
    status: "active",
  },
];

const SyllabusPage = () => {
  // const [remove, setRemove] = useState<boolean>(false);
  const [rows, setRows] = useState(initialRow);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const columns: GridColDef[] = [
    {
      field: "syllabus",
      headerClassName: "super-app-theme--header",
      headerName: "Syllabus",
      width: 620,
      editable: true,
    },
    {
      field: "code",
      headerClassName: "super-app-theme--header",
      headerName: "Code",
      width: 120,
      editable: true,
    },
    {
      field: "createdDate",
      headerName: "Created date",
      headerClassName: "super-app-theme--header",
      width: 256,
      type: "date",
      editable: true,
    },
    {
      field: "createdBy",
      headerClassName: "super-app-theme--header",
      width: 195,
      headerName: "Created by",
      editable: true,
    },
    {
      field: "duration",
      headerClassName: "super-app-theme--header",
      width: 173,
      headerName: "Duration",
      editable: true,
    },
    {
      field: "outputStandard",
      headerClassName: "super-app-theme--header",
      width: 206,
      headerName: "Output standard",
      editable: true,
    },
    {
      field: "status",
      headerClassName: "super-app-theme--header",
      width: 180,
      headerName: "Status",
      editable: true,
    },
    {
      field: " ",
      headerName: " ",
      width: 100,
      headerClassName: "super-app-theme--header",
      type: "actions",
      cellClassName: "actions",
      getActions: ({ id }: { id: GridRowId }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<GridSaveAltIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<Cancel />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<Edit />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<Delete />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box width="100%" position="relative">
      <Box width="100%" padding="20px 0px 20px 30px">
        <TypographyUI title="Syllabus" />
      </Box>
      <Divider sx={{ borderBottom: "2px solid #000" }} />
      <Box width="100%" padding="20px 30px 20px 30px">
        <Stack flexDirection="row" justifyContent="space-between">
          <Stack direction="row" spacing={2}>
            <InputSearch />
            <InputDate />
          </Stack>
          <Stack direction="row" width="20%" spacing={2}>
            <ButtonUI icon={<Publish />} title="Import" />
            <ButtonUI icon={<ControlPoint />} title="Add Syllabus" />
          </Stack>
        </Stack>
        <Stack paddingTop={2} spacing={1} direction="row">
          <Note textSearch="foundation" />
          <Note textSearch="HaNTT2" />
          <Note textSearch="TES" />
        </Stack>
      </Box>
      <TableUI
        rowModesModel={rowModesModel}
        initialRow={initialRow}
        columns={columns}
        setRowModesModel={setRowModesModel}
        processRowUpdate={processRowUpdate}
        setRows={setRows}
      />
    </Box>
  );
};

export default SyllabusPage;
