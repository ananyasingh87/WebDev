# Generated by Django 2.2.17 on 2020-12-01 11:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mywebsite', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.ImageField(blank=True, upload_to='media/'),
        ),
        migrations.AlterField(
            model_name='project',
            name='link',
            field=models.TextField(blank=True),
        ),
    ]