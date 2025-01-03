package com.saucodes.studentsystem.service;

import com.saucodes.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
