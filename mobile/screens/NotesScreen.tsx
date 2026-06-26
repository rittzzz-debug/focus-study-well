import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDataStore } from '../store/dataStore';

export default function NotesScreen() {
  const [showNewNote, setShowNewNote] = useState(false);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const { notes, addNote } = useDataStore();

  const mockNotes = [
    {
      id: 1,
      title: 'PCR Steps',
      content: 'Denaturation, Annealing, Extension',
      date: '2024-01-15',
      isPinned: true,
    },
    {
      id: 2,
      title: 'Important Definitions',
      content: 'Gene - A unit of heredity. Allele - Alternative form of gene.',
      date: '2024-01-14',
      isPinned: false,
    },
  ];

  const handleAddNote = async () => {
    if (noteTitle && noteContent) {
      await addNote('1', noteTitle, noteContent);
      setNoteTitle('');
      setNoteContent('');
      setShowNewNote(false);
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="px-6 py-6">
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-2xl font-bold text-gray-800">My Notes</Text>
          <TouchableOpacity
            className="bg-indigo-600 rounded-full w-12 h-12 justify-center items-center"
            onPress={() => setShowNewNote(true)}
          >
            <Ionicons name="add" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {mockNotes.length === 0 ? (
          <View className="items-center justify-center py-12">
            <Text className="text-5xl mb-4">📝</Text>
            <Text className="text-gray-600 text-center">
              No notes yet. Create your first note!
            </Text>
          </View>
        ) : (
          <View className="gap-4">
            {mockNotes.map((note) => (
              <View
                key={note.id}
                className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4"
              >
                <View className="flex-row justify-between items-start mb-2">
                  <View className="flex-1">
                    <View className="flex-row items-center">
                      {note.isPinned && (
                        <Ionicons
                          name="pin"
                          size={16}
                          color="#f59e0b"
                          style={{ marginRight: 4 }}
                        />
                      )}
                      <Text className="font-bold text-gray-800 text-lg">
                        {note.title}
                      </Text>
                    </View>
                  </View>
                </View>
                <Text className="text-gray-700 mb-2">{note.content}</Text>
                <Text className="text-xs text-gray-500">{note.date}</Text>
              </View>
            ))}
          </View>
        )}
      </View>

      {/* New Note Modal */}
      <Modal visible={showNewNote} animationType="slide" transparent={true}>
        <View className="flex-1 bg-white">
          <View className="bg-indigo-600 px-6 py-4 flex-row justify-between items-center">
            <TouchableOpacity onPress={() => setShowNewNote(false)}>
              <Ionicons name="close" size={24} color="#fff" />
            </TouchableOpacity>
            <Text className="text-white font-bold text-lg">New Note</Text>
            <TouchableOpacity onPress={handleAddNote}>
              <Ionicons name="checkmark" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <View className="flex-1 px-6 py-6">
            <TextInput
              className="text-xl font-bold text-gray-800 mb-4 pb-4 border-b border-gray-300"
              placeholder="Note Title"
              value={noteTitle}
              onChangeText={setNoteTitle}
            />
            <TextInput
              className="flex-1 text-gray-700 text-base align-top"
              placeholder="Write your note here..."
              value={noteContent}
              onChangeText={setNoteContent}
              multiline
              textAlignVertical="top"
            />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
