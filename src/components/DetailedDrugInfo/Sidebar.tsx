import { Box, List, ListItem, ListItemText } from "@mui/material";

interface SidebarProps {
  data: Array<any>;
}
const Sidebar = ({ data }: SidebarProps) => {
  return (
    <Box>
      <List>
        {data.map((section: { key: string; value: Array<any> }) => (
          <ListItem
          // selected={activeSection === section.id}
          // onClick={() => onSectionClick(section.id)}
          >
            <ListItemText primary={section.key} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
