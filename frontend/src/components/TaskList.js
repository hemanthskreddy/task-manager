import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Paper,
  Chip,
  Box,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  CheckCircle as CheckCircleIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';

function TaskList({ tasks, onEdit, onDelete, onStatusChange }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'error';
      case 'medium':
        return 'warning';
      case 'low':
        return 'success';
      default:
        return 'default';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'in_progress':
        return 'warning';
      case 'pending':
        return 'default';
      default:
        return 'default';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <Paper elevation={3}>
      <List>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            divider
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            <ListItemText
              primary={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="h6">{task.title}</Typography>
                  <Chip
                    label={task.priority}
                    color={getPriorityColor(task.priority)}
                    size="small"
                  />
                  <Chip
                    label={task.status}
                    color={getStatusColor(task.status)}
                    size="small"
                  />
                </Box>
              }
              secondary={
                <>
                  <Typography component="span" variant="body2">
                    {task.description}
                  </Typography>
                  {task.due_date && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                      <ScheduleIcon fontSize="small" sx={{ mr: 0.5 }} />
                      <Typography variant="body2" color="textSecondary">
                        Due: {formatDate(task.due_date)}
                      </Typography>
                    </Box>
                  )}
                </>
              }
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                onClick={() => onStatusChange(task.id, 'completed')}
                color="success"
                sx={{ mr: 1 }}
              >
                <CheckCircleIcon />
              </IconButton>
              <IconButton
                edge="end"
                onClick={() => onEdit(task)}
                sx={{ mr: 1 }}
              >
                <EditIcon />
              </IconButton>
              <IconButton edge="end" onClick={() => onDelete(task.id)} color="error">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default TaskList;
