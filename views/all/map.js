function(doc) {
  if(!doc.filename) {
    emit(doc._id, doc);
  } else {
    emit(doc.filename, doc);
  }
}
