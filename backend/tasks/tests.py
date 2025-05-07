from django.test import TestCase
from django.contrib.auth.models import User
from .models import Task
from datetime import datetime, timedelta

class TaskModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser',
            password='testpass123'
        )
        self.task = Task.objects.create(
            title='Test Task',
            description='Test Description',
            user=self.user,
            priority='medium',
            status='pending'
        )

    def test_task_creation(self):
        self.assertEqual(self.task.title, 'Test Task')
        self.assertEqual(self.task.description, 'Test Description')
        self.assertEqual(self.task.user, self.user)
        self.assertEqual(self.task.priority, 'medium')
        self.assertEqual(self.task.status, 'pending')

    def test_task_str_method(self):
        self.assertEqual(str(self.task), 'Test Task')

    def test_task_with_due_date(self):
        due_date = datetime.now() + timedelta(days=1)
        task = Task.objects.create(
            title='Task with Due Date',
            user=self.user,
            due_date=due_date
        )
        self.assertEqual(task.due_date, due_date)
