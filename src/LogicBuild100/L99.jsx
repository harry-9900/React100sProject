import React, { useState, useEffect } from 'react';

const StudentGradeSystem = () => {
  // ১. মার্কস থেকে লেটার গ্রেড ও গ্রেড পয়েন্ট বের করার হেলপার ফাংশন
  const getGradeAndPoint = (mark) => {
    const num = Number(mark);
    if (isNaN(num) || mark === '') return { grade: '-', point: 0 };
    if (num >= 80 && num <= 100) return { grade: 'A+', point: 5.00 };
    if (num >= 70 && num <= 79) return { grade: 'A', point: 4.00 };
    if (num >= 60 && num <= 69) return { grade: 'A-', point: 3.50 };
    if (num >= 50 && num <= 59) return { grade: 'B', point: 3.00 };
    if (num >= 40 && num <= 49) return { grade: 'C', point: 2.00 };
    if (num >= 33 && num <= 39) return { grade: 'D', point: 1.00 };
    return { grade: 'F', point: 0.00 };
  };

  // ২. প্রাথমিক সাবজেক্ট লিস্ট (LocalStorage থেকে লোড হবে)
  const [subjects, setSubjects] = useState(() => {
    const saved = localStorage.getItem('student_grades');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: 'Bangla', mark: 85 },
      { id: 2, name: 'English', mark: 72 },
      { id: 3, name: 'Mathematics', mark: 90 },
      { id: 4, name: 'ICT', mark: 65 }
    ];
  });

  const [subjectName, setSubjectName] = useState('');
  const [subjectMark, setSubjectMark] = useState('');

  // ৩. সাবজেক্ট চেঞ্জ হলেই LocalStorage-এ সেভ করা
  useEffect(() => {
    localStorage.setItem('student_grades', JSON.stringify(subjects));
  }, [subjects]);

  // নতুন বিষয় যোগ করা
  const handleAddSubject = (e) => {
    e.preventDefault();
    if (!subjectName.trim() || subjectMark === '') return;
    
    const newSubject = {
      id: Date.now(),
      name: subjectName,
      mark: Math.min(100, Math.max(0, Number(subjectMark)))
    };

    setSubjects([...subjects, newSubject]);
    setSubjectName('');
    setSubjectMark('');
  };

  // বিষয় মুছে ফেলা
  const handleRemoveSubject = (id) => {
    setSubjects(subjects.filter(sub => sub.id !== id));
  };

  // নম্বর আপডেট করা
  const handleMarkChange = (id, newMark) => {
    const val = newMark === '' ? '' : Math.min(100, Math.max(0, Number(newMark)));
    setSubjects(subjects.map(sub => sub.id === id ? { ...sub, mark: val } : sub));
  };

  // ৪. সার্বিক GPA এবং রেজাল্ট গণনাকরণ
  const calculateFinalResult = () => {
    if (subjects.length === 0) return { gpa: '0.00', status: 'No Subjects', passed: false };

    let totalPoints = 0;
    let hasFailed = false;

    for (let sub of subjects) {
      const { point, grade } = getGradeAndPoint(sub.mark);
      if (grade === 'F' || sub.mark === '') {
        hasFailed = true;
      }
      totalPoints += point;
    }

    if (hasFailed) {
      return { gpa: '0.00', status: 'Failed (F Grade Received)', passed: false };
    }

    const avgGpa = (totalPoints / subjects.length).toFixed(2);
    return { gpa: avgGpa, status: 'Passed', passed: true };
  };

  const finalResult = calculateFinalResult();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-4 md:p-8 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 p-6 md:p-8">
        
        {/* Header */}
        <div className="border-b border-slate-700 pb-5 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-emerald-400">Student Grade System</h1>
            <p className="text-slate-400 text-sm mt-1">GPA and Grade Calculator (HSC / General Standard)</p>
          </div>
          
          {/* GPA Result Card */}
          <div className={`rounded-xl px-5 py-3 text-center ${finalResult.passed ? 'bg-emerald-500/10 border border-emerald-500/30' : 'bg-rose-500/10 border border-rose-500/30'}`}>
            <p className="text-xs uppercase tracking-wide text-slate-400">Final GPA</p>
            <p className={`text-2xl font-bold ${finalResult.passed ? 'text-emerald-400' : 'text-rose-400'}`}>{finalResult.gpa}</p>
            <p className="text-sm text-slate-300">{finalResult.status}</p>
          </div>
        </div>

        <form onSubmit={handleAddSubject} className="grid grid-cols-1 md:grid-cols-[1fr_150px_auto] gap-3 mb-6">
          <input
            type="text"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            placeholder="Subject name"
            aria-label="Subject name"
            className="rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-slate-100 outline-none focus:border-emerald-400"
          />
          <input
            type="number"
            min="0"
            max="100"
            value={subjectMark}
            onChange={(e) => setSubjectMark(e.target.value)}
            placeholder="Mark (0–100)"
            aria-label="Subject mark"
            className="rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-slate-100 outline-none focus:border-emerald-400"
          />
          <button type="submit" className="rounded-lg bg-emerald-500 px-5 py-2 font-semibold text-slate-950 hover:bg-emerald-400">
            Add Subject
          </button>
        </form>

        <div className="overflow-x-auto rounded-xl border border-slate-700">
          <table className="w-full text-left">
            <thead className="bg-slate-700/50 text-sm text-slate-300">
              <tr>
                <th className="px-4 py-3">Subject</th>
                <th className="px-4 py-3">Mark</th>
                <th className="px-4 py-3">Grade</th>
                <th className="px-4 py-3">Point</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {subjects.map((subject) => {
                const { grade, point } = getGradeAndPoint(subject.mark);
                return (
                  <tr key={subject.id} className="text-slate-200">
                    <td className="px-4 py-3">{subject.name}</td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={subject.mark}
                        onChange={(e) => handleMarkChange(subject.id, e.target.value)}
                        aria-label={`${subject.name} mark`}
                        className="w-24 rounded-md border border-slate-600 bg-slate-900 px-2 py-1 outline-none focus:border-emerald-400"
                      />
                    </td>
                    <td className="px-4 py-3">{grade}</td>
                    <td className="px-4 py-3">{point.toFixed(2)}</td>
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        onClick={() => handleRemoveSubject(subject.id)}
                        aria-label={`Remove ${subject.name}`}
                        className="text-rose-400 hover:text-rose-300"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
              {subjects.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-4 py-6 text-center text-slate-400">No subjects added yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentGradeSystem;