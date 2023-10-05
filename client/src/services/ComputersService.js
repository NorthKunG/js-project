import Api from '@/services/Api'

export default {
    index (search) {
        return Api().get('computers')
    },
    show (computerId) {
        return Api().get('computer/' + computerId)
    },
    post (computer) {
        return Api().post('computer/', computer)
    },
    put (computer) {
        return Api().put('computer/' + computer.id, computer)
    },
    delete (computer) {
        return Api().delete('computer/' + computer.id, computer)
    },
}