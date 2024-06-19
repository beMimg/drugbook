import { Box, List, ListItem, ListItemText } from "@mui/material";

const sections = [
  { id: "children", label: "Children" },
  { id: "pregnancy", label: "Pregnancy" },
  { id: "dosage", label: "Dosage" },
  // Add more sections as needed
];

const Sidebar = () => {
  return (
    <Box>
      <List>
        {sections.map((section) => (
          <ListItem
            key={section.id}
            // selected={activeSection === section.id}
            // onClick={() => onSectionClick(section.id)}
          >
            <ListItemText primary={section.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
