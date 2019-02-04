var arrayOfDocs = function (docs) {
  return docs.map(singleDoc)
}

var singleDoc = function (doc) {
  if (doc && typeof doc === 'object') {
    if (doc.id) {
      doc._id = doc.id
      delete doc.id
    }
    //Bobby, 04Feb2019: need _rev for bulk delete
    //delete doc._rev
    delete doc.rev
  }
  return doc
}

module.exports = {
  singleDoc: singleDoc,
  arrayOfDocs: arrayOfDocs
}
